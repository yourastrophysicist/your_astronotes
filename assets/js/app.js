document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Dynamic File Tree Explorer ---
  const treeContainer = document.getElementById('file-tree');
  const searchInput = document.getElementById('tree-search');

  const pagesList = window.sitePages || (typeof sitePages !== 'undefined' && Array.isArray(sitePages) ? sitePages : []);

  if (treeContainer && pagesList.length > 0) {
    const currentUrl = window.location.pathname;

    function buildTree(pages) {
      const root = { folders: {}, files: [] };
      pages.forEach(page => {
        if (!page || typeof page.path !== 'string' || page.path === 'index.md') return;
        const parts = page.path.split('/');
        let current = root;
        for (let i = 0; i < parts.length - 1; i++) {
          const folderName = parts[i];
          if (!current.folders[folderName]) {
            current.folders[folderName] = { folders: {}, files: [] };
          }
          current = current.folders[folderName];
        }
        current.files.push(page);
      });
      return root;
    }

    function createFolderIcon() {
      const svgNS = 'http://www.w3.org/2000/svg';
      const svg = document.createElementNS(svgNS, 'svg');
      svg.setAttribute('width', '14');
      svg.setAttribute('height', '14');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('fill', 'none');
      svg.setAttribute('stroke', 'currentColor');
      svg.setAttribute('stroke-width', '2');
      svg.setAttribute('stroke-linecap', 'round');
      svg.setAttribute('stroke-linejoin', 'round');
      svg.classList.add('folder-icon');

      const path = document.createElementNS(svgNS, 'path');
      path.setAttribute('d', 'M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z');
      svg.appendChild(path);
      return svg;
    }

    function renderTree(node, container, pathPrefix = '') {
      const ul = document.createElement('ul');
      ul.className = 'tree-list';

      // Render Folders
      Object.keys(node.folders).sort().forEach(folderName => {
        const li = document.createElement('li');
        li.className = 'tree-item';

        const folderDiv = document.createElement('div');
        folderDiv.className = 'tree-folder';
        folderDiv.appendChild(createFolderIcon());
        folderDiv.appendChild(document.createTextNode(' ' + folderName));

        const subContainer = document.createElement('ul');
        subContainer.className = 'tree-folder-contents is-collapsed'; // Collapsed by default

        folderDiv.addEventListener('click', () => {
          subContainer.classList.toggle('is-collapsed');
          subContainer.classList.toggle('is-expanded');
        });

        li.appendChild(folderDiv);
        const childFolder = node.folders[folderName];
        if (childFolder) {
          renderTree(childFolder, subContainer, pathPrefix + folderName + '/');
        }
        li.appendChild(subContainer);
        ul.appendChild(li);

        // Auto-expand folder if it contains the current page
        if (currentUrl.includes(pathPrefix + folderName + '/')) {
          subContainer.classList.remove('is-collapsed');
          subContainer.classList.add('is-expanded');
        }
      });

      // Render Files
      node.files.slice().sort((a, b) => {
        const titleA = (a && typeof a.title === 'string') ? a.title : '';
        const titleB = (b && typeof b.title === 'string') ? b.title : '';
        return titleA.localeCompare(titleB);
      }).forEach(page => {
        if (!page || typeof page.url !== 'string' || typeof page.title !== 'string') return;
        const li = document.createElement('li');
        li.className = 'tree-item';

        const a = document.createElement('a');
        a.className = 'tree-file-link';
        a.href = page.url;
        a.textContent = page.title;

        // Active link highlight
        const normalizedCurrent = currentUrl.replace(/\/index\.html$/, '').replace(/\/$/, '');
        const normalizedPage = page.url.replace(/\/index\.html$/, '').replace(/\/$/, '');
        if (normalizedCurrent === normalizedPage) {
          a.classList.add('active');
          // Bubble expand parents
          let parent = li.parentElement;
          while (parent && parent.classList.contains('tree-folder-contents')) {
            parent.classList.remove('is-collapsed');
            parent.classList.add('is-expanded');
            parent = parent.parentElement ? parent.parentElement.parentElement : null;
          }
        }

        li.appendChild(a);
        ul.appendChild(li);
      });

      container.appendChild(ul);
    }

    const treeData = buildTree(pagesList);
    renderTree(treeData, treeContainer);

    // Search Filtering
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const target = e.target;
        const query = (target && typeof target.value === 'string') ? target.value.toLowerCase().trim() : '';

        const fileLinks = treeContainer.querySelectorAll('.tree-file-link');
        const folderDivs = treeContainer.querySelectorAll('.tree-folder');

        if (query === '') {
          // Reset all items to visible
          treeContainer.querySelectorAll('.tree-item').forEach(item => {
            item.classList.remove('is-hidden');
          });
          // Collapse folders not on current URL path
          folderDivs.forEach(folderDiv => {
            const folderLi = folderDiv.closest('.tree-item');
            const contents = folderLi ? folderLi.querySelector('.tree-folder-contents') : null;
            const folderTitle = (folderDiv.textContent || '').trim();
            if (contents && !currentUrl.includes(folderTitle)) {
              contents.classList.remove('is-expanded');
              contents.classList.add('is-collapsed');
            }
          });
          return;
        }

        // Initially hide all file and folder tree items
        treeContainer.querySelectorAll('.tree-item').forEach(item => {
          item.classList.add('is-hidden');
        });

        // 1. Match file items
        fileLinks.forEach(a => {
          const title = (a.textContent || '').toLowerCase();
          if (title.includes(query)) {
            const fileItem = a.closest('.tree-item');
            if (fileItem) {
              fileItem.classList.remove('is-hidden');

              // Show and expand all parent folders
              let parentFolder = fileItem.parentElement ? fileItem.parentElement.closest('.tree-item') : null;
              while (parentFolder) {
                parentFolder.classList.remove('is-hidden');
                const contents = parentFolder.querySelector('.tree-folder-contents');
                if (contents) {
                  contents.classList.remove('is-collapsed');
                  contents.classList.add('is-expanded');
                }
                parentFolder = parentFolder.parentElement ? parentFolder.parentElement.closest('.tree-item') : null;
              }
            }
          }
        });

        // 2. Match folder items directly
        folderDivs.forEach(folderDiv => {
          const folderTitle = (folderDiv.textContent || '').toLowerCase().trim();
          if (folderTitle.includes(query)) {
            const folderItem = folderDiv.closest('.tree-item');
            if (folderItem) {
              folderItem.classList.remove('is-hidden');

              // Show all child tree items inside matching folder
              folderItem.querySelectorAll('.tree-item').forEach(child => {
                child.classList.remove('is-hidden');
              });

              const contents = folderItem.querySelector('.tree-folder-contents');
              if (contents) {
                contents.classList.remove('is-collapsed');
                contents.classList.add('is-expanded');
              }

              // Show and expand all parent folders above this matching folder
              let parentFolder = folderItem.parentElement ? folderItem.parentElement.closest('.tree-item') : null;
              while (parentFolder) {
                parentFolder.classList.remove('is-hidden');
                const parentContents = parentFolder.querySelector('.tree-folder-contents');
                if (parentContents) {
                  parentContents.classList.remove('is-collapsed');
                  parentContents.classList.add('is-expanded');
                }
                parentFolder = parentFolder.parentElement ? parentFolder.parentElement.closest('.tree-item') : null;
              }
            }
          }
        });
      });
    }
  }

  // --- 2. Dynamic Table of Contents (Right Sidebar) ---
  const mainContent = document.querySelector('main');
  const tocContainer = document.getElementById('toc-content');

  if (mainContent && tocContainer) {
    const headers = mainContent.querySelectorAll('h1, h2, h3');
    if (headers.length > 0) {
      const tocUl = document.createElement('div');

      headers.forEach((header, index) => {
        if (!header.id) {
          header.id = 'header-' + index;
        }

        const a = document.createElement('a');
        a.className = 'toc-link';
        a.href = '#' + header.id;
        a.textContent = header.textContent || '';
        const level = parseInt(header.tagName.substring(1), 10);
        a.setAttribute('data-level', String(level));

        tocUl.appendChild(a);
      });
      tocContainer.appendChild(tocUl);

      // --- 3. ScrollSpy Functionality ---
      const tocLinks = tocContainer.querySelectorAll('.toc-link');
      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60% 0px',
        threshold: 0
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const activeId = entry.target.id;
            tocLinks.forEach(link => {
              if (link.getAttribute('href') === '#' + activeId) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      }, observerOptions);

      headers.forEach(header => observer.observe(header));
    } else {
      const rightSidebar = document.querySelector('.sidebar-right');
      if (rightSidebar) rightSidebar.classList.add('is-hidden');
    }
  }

  // --- 4. Automatic .md to .html Link Rewriter ---
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (link && link.href) {
      try {
        const url = new URL(link.href, window.location.origin);
        if (url.origin === window.location.origin && url.pathname.endsWith('.md')) {
          e.preventDefault();
          url.pathname = url.pathname.replace(/\.md$/, '.html');
          window.location.href = url.pathname + url.search + url.hash;
        }
      } catch (err) {}
    }
  });

  // --- 5. Interactive Local Graph View ---
  const canvas = document.getElementById('graph-canvas');
  const tooltip = document.getElementById('graph-tooltip');
  const zoomInBtn = document.getElementById('graph-zoom-in');
  const zoomOutBtn = document.getElementById('graph-zoom-out');
  const resetBtn = document.getElementById('graph-reset');

  if (canvas) {
    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;
    const width = container.clientWidth || 246;
    const height = container.clientHeight || 228;
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.scale(dpr, dpr);

    // Build local graph nodes from current page and outgoing links
    const currentPath = window.location.pathname;
    const currentH1 = document.querySelector('h1');
    const currentTitle = currentH1 ? currentH1.textContent.trim() : document.title.split('|')[0].trim();
    
    const nodes = [];
    const links = [];
    const addedUrls = new Set([currentPath]);
    const nodeByUrl = new Map();

    // Center node (current page)
    const centerNode = {
      id: 'center',
      title: currentTitle,
      url: currentPath,
      x: width / 2,
      y: height / 2,
      vx: 0,
      vy: 0,
      radius: 6.5,
      isCenter: true,
      degree: 0,
      color: '#3366cc'
    };
    nodes.push(centerNode);
    nodeByUrl.set(currentPath, centerNode);

    // Find outgoing internal links on the page
    const contentLinks = document.querySelectorAll('.markdown-body a');

    contentLinks.forEach(a => {
      if (!a.href || a.href.startsWith('#') || a.href.startsWith('mailto:')) return;
      try {
        const u = new URL(a.href, window.location.origin);
        if (u.origin !== window.location.origin) return;
        const normPath = u.pathname.replace(/\.md$/, '.html');
        if (addedUrls.has(normPath)) return;
        addedUrls.add(normPath);

        const nodeTitle = a.textContent.trim() || normPath.split('/').pop().replace(/\.html$/, '');
        const angle = Math.random() * Math.PI * 2;
        const dist = 40 + Math.random() * 35;
        const node = {
          id: 'node-' + nodes.length,
          title: nodeTitle,
          url: normPath,
          x: width / 2 + Math.cos(angle) * dist,
          y: height / 2 + Math.sin(angle) * dist,
          vx: 0,
          vy: 0,
          radius: 4.5,
          isCenter: false,
          degree: 1,
          color: '#54595d'
        };
        nodes.push(node);
        nodeByUrl.set(normPath, node);
        links.push({ source: centerNode, target: node });
        centerNode.degree++;
      } catch (err) {}
    });

    // Add sibling notes from sitePages to enrich graph topology
    const sp = window.sitePages || (typeof sitePages !== 'undefined' ? sitePages : []);
    if (Array.isArray(sp) && sp.length > 0) {
      const currentFolder = currentPath.split('/').slice(0, -1).join('/');
      sp.forEach(p => {
        if (nodes.length >= 18 || !p.url) return;
        const normUrl = p.url.replace(/\.md$/, '.html');
        if (addedUrls.has(normUrl)) return;
        if (normUrl.includes(currentFolder) && normUrl !== currentPath) {
          addedUrls.add(normUrl);
          const angle = Math.random() * Math.PI * 2;
          const dist = 50 + Math.random() * 40;
          const node = {
            id: 'node-' + nodes.length,
            title: p.title,
            url: normUrl,
            x: width / 2 + Math.cos(angle) * dist,
            y: height / 2 + Math.sin(angle) * dist,
            vx: 0,
            vy: 0,
            radius: 4,
            isCenter: false,
            degree: 1,
            color: '#72777d'
          };
          nodes.push(node);
          nodeByUrl.set(normUrl, node);
          links.push({ source: centerNode, target: node });
          centerNode.degree++;
        }
      });
    }

    // Connect cross-links among neighboring nodes if they share title terms
    for (let i = 1; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const ni = nodes[i];
        const nj = nodes[j];
        const wordsI = ni.title.toLowerCase().split(/\W+/).filter(w => w.length > 3);
        const wordsJ = nj.title.toLowerCase().split(/\W+/).filter(w => w.length > 3);
        const common = wordsI.some(w => wordsJ.includes(w));
        if (common && Math.random() < 0.4) {
          links.push({ source: ni, target: nj });
          ni.degree++;
          nj.degree++;
        }
      }
    }

    // Camera Transform (Pan and Zoom)
    const transform = { x: 0, y: 0, k: 1.0 };

    function worldToScreen(wx, wy) {
      return {
        x: (wx - width / 2) * transform.k + width / 2 + transform.x,
        y: (wy - height / 2) * transform.k + height / 2 + transform.y
      };
    }

    function screenToWorld(sx, sy) {
      return {
        x: (sx - width / 2 - transform.x) / transform.k + width / 2,
        y: (sy - height / 2 - transform.y) / transform.k + height / 2
      };
    }

    // Force Simulation with Alpha Cooling
    let alpha = 1.0;
    let animId = null;
    let draggedNode = null;
    let isPanning = false;
    let panStartX = 0;
    let panStartY = 0;
    let hoveredNode = null;
    let dragStartX = 0;
    let dragStartY = 0;
    let hasDragged = false;

    function render() {
      ctx.clearRect(0, 0, width, height);

      // Identify active neighbor set when hovering
      const activeNeighborIds = new Set();
      if (hoveredNode) {
        activeNeighborIds.add(hoveredNode.id);
        links.forEach(l => {
          if (l.source.id === hoveredNode.id) activeNeighborIds.add(l.target.id);
          if (l.target.id === hoveredNode.id) activeNeighborIds.add(l.source.id);
        });
      }

      // 1. Draw Edges
      links.forEach(l => {
        const sp = worldToScreen(l.source.x, l.source.y);
        const tp = worldToScreen(l.target.x, l.target.y);
        const isHoverEdge = hoveredNode && (l.source.id === hoveredNode.id || l.target.id === hoveredNode.id);

        ctx.beginPath();
        ctx.moveTo(sp.x, sp.y);
        ctx.lineTo(tp.x, tp.y);

        if (isHoverEdge) {
          ctx.lineWidth = 2 * transform.k;
          ctx.strokeStyle = '#3366cc';
        } else {
          ctx.lineWidth = 1 * transform.k;
          ctx.strokeStyle = hoveredNode ? 'rgba(200, 204, 209, 0.3)' : '#c8ccd1';
        }
        ctx.stroke();
      });

      // 2. Draw Nodes
      nodes.forEach(n => {
        const p = worldToScreen(n.x, n.y);
        const r = n.radius * transform.k;
        const isHover = (n === hoveredNode);
        const isNeighbor = hoveredNode && activeNeighborIds.has(n.id);
        const dimmed = hoveredNode && !isNeighbor;

        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);

        if (dimmed) {
          ctx.fillStyle = 'rgba(162, 169, 177, 0.25)';
          ctx.fill();
        } else if (isHover) {
          ctx.fillStyle = '#2a4b8d';
          ctx.fill();
          ctx.lineWidth = 2 * transform.k;
          ctx.strokeStyle = '#3366cc';
          ctx.stroke();
        } else if (n.isCenter) {
          ctx.fillStyle = '#3366cc';
          ctx.fill();
          ctx.lineWidth = 1.5 * transform.k;
          ctx.strokeStyle = '#202122';
          ctx.stroke();
        } else if (isNeighbor) {
          ctx.fillStyle = '#202122';
          ctx.fill();
          ctx.lineWidth = 1.5 * transform.k;
          ctx.strokeStyle = '#3366cc';
          ctx.stroke();
        } else {
          ctx.fillStyle = n.color;
          ctx.fill();
          ctx.lineWidth = 1 * transform.k;
          ctx.strokeStyle = '#a2a9b1';
          ctx.stroke();
        }

        // Draw clean labels for center node and hovered/neighbor nodes
        if (n.isCenter || isHover || (isNeighbor && transform.k >= 0.9)) {
          ctx.font = `${Math.max(9, Math.round(10 * transform.k))}px sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'top';
          const label = n.title.length > 20 ? n.title.substring(0, 18) + '...' : n.title;
          const textY = p.y + r + 3;

          // Label pill background
          const textWidth = ctx.measureText(label).width;
          ctx.fillStyle = isHover ? 'rgba(32, 33, 34, 0.85)' : 'rgba(255, 255, 255, 0.88)';
          ctx.fillRect(p.x - textWidth / 2 - 3, textY - 1, textWidth + 6, 13 * transform.k);

          ctx.fillStyle = isHover ? '#ffffff' : (n.isCenter ? '#3366cc' : '#202122');
          ctx.fillText(label, p.x, textY);
        }
      });
    }

    function step() {
      if (alpha > 0.005) {
        // Soft Coulomb repulsion
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const a = nodes[i];
            const b = nodes[j];
            const dx = b.x - a.x;
            const dy = b.y - a.y;
            const dist = Math.max(Math.hypot(dx, dy), 6);
            if (dist < 110) {
              const force = (200 / (dist * dist + 50)) * alpha;
              const fx = (dx / dist) * force;
              const fy = (dy / dist) * force;
              if (a !== draggedNode && !a.isCenter) { a.vx -= fx; a.vy -= fy; }
              if (b !== draggedNode && !b.isCenter) { b.vx += fx; b.vy += fy; }
            }
          }
        }

        // Soft Hooke spring attraction
        links.forEach(l => {
          const dx = l.target.x - l.source.x;
          const dy = l.target.y - l.source.y;
          const dist = Math.hypot(dx, dy) || 1;
          const desiredDist = 52;
          const force = (dist - desiredDist) * 0.035 * alpha;
          const fx = (dx / dist) * force;
          const fy = (dy / dist) * force;
          if (l.source !== draggedNode && !l.source.isCenter) { l.source.vx += fx; l.source.vy += fy; }
          if (l.target !== draggedNode && !l.target.isCenter) { l.target.vx -= fx; l.target.vy -= fy; }
        });

        // Center gravity and velocity damping
        nodes.forEach(n => {
          if (n === draggedNode) return;
          if (n.isCenter) {
            n.x += (width / 2 - n.x) * 0.1;
            n.y += (height / 2 - n.y) * 0.1;
            return;
          }
          n.vx += (width / 2 - n.x) * 0.007 * alpha;
          n.vy += (height / 2 - n.y) * 0.007 * alpha;

          n.vx *= 0.86;
          n.vy *= 0.86;
          n.x += n.vx;
          n.y += n.vy;
        });

        alpha *= 0.95;
      }

      render();

      if (alpha > 0.005 || draggedNode || isPanning) {
        animId = requestAnimationFrame(step);
      } else {
        animId = null;
      }
    }

    function wakeSimulation(heat = 0.3) {
      alpha = Math.max(alpha, heat);
      if (!animId) {
        animId = requestAnimationFrame(step);
      }
    }

    wakeSimulation(1.0);

    // Node hit testing in screen coordinates
    function getNodeAt(sx, sy) {
      for (let i = nodes.length - 1; i >= 0; i--) {
        const n = nodes[i];
        const p = worldToScreen(n.x, n.y);
        const dist = Math.hypot(p.x - sx, p.y - sy);
        if (dist <= (n.radius * transform.k) + 6) return n;
      }
      return null;
    }

    // Zoom and Pan Controls
    function setZoom(factor, centerX = width / 2, centerY = height / 2) {
      const newScale = Math.max(0.5, Math.min(3.0, transform.k * factor));
      const scaleChange = newScale / transform.k;
      transform.x = centerX - (centerX - transform.x) * scaleChange;
      transform.y = centerY - (centerY - transform.y) * scaleChange;
      transform.k = newScale;
      wakeSimulation(0.1);
      render();
    }

    if (zoomInBtn) {
      zoomInBtn.addEventListener('click', () => setZoom(1.25));
    }
    if (zoomOutBtn) {
      zoomOutBtn.addEventListener('click', () => setZoom(0.8));
    }
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        transform.x = 0;
        transform.y = 0;
        transform.k = 1.0;
        wakeSimulation(0.4);
        render();
      });
    }

    // Mouse Wheel Zooming
    canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const sx = e.clientX - rect.left;
      const sy = e.clientY - rect.top;
      const zoomFactor = e.deltaY < 0 ? 1.12 : 0.89;
      setZoom(zoomFactor, sx, sy);
    }, { passive: false });

    // Mouse & Touch Interactions
    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const sx = e.clientX - rect.left;
      const sy = e.clientY - rect.top;

      if (draggedNode) {
        if (!hasDragged && Math.hypot(sx - dragStartX, sy - dragStartY) > 3) {
          hasDragged = true;
        }
        const w = screenToWorld(sx, sy);
        draggedNode.x = w.x;
        draggedNode.y = w.y;
        draggedNode.vx = 0;
        draggedNode.vy = 0;
        wakeSimulation(0.25);
        return;
      }

      if (isPanning) {
        if (!hasDragged && Math.hypot(sx - dragStartX, sy - dragStartY) > 3) {
          hasDragged = true;
        }
        transform.x += (sx - panStartX);
        transform.y += (sy - panStartY);
        panStartX = sx;
        panStartY = sy;
        render();
        return;
      }

      const prevHovered = hoveredNode;
      hoveredNode = getNodeAt(sx, sy);

      if (hoveredNode) {
        canvas.style.cursor = 'pointer';
        if (tooltip) {
          const connText = hoveredNode.degree > 0 ? ` (${hoveredNode.degree} links)` : '';
          tooltip.textContent = hoveredNode.title + connText;
          tooltip.style.left = Math.min(sx + 10, width - 190) + 'px';
          tooltip.style.top = Math.max(sy - 28, 5) + 'px';
          tooltip.style.display = 'block';
        }
      } else {
        canvas.style.cursor = 'grab';
        if (tooltip) tooltip.style.display = 'none';
      }

      if (hoveredNode !== prevHovered) {
        render();
      }
    });

    canvas.addEventListener('mouseleave', () => {
      hoveredNode = null;
      draggedNode = null;
      isPanning = false;
      hasDragged = false;
      if (tooltip) tooltip.style.display = 'none';
      render();
    });

    canvas.addEventListener('mousedown', (e) => {
      const rect = canvas.getBoundingClientRect();
      const sx = e.clientX - rect.left;
      const sy = e.clientY - rect.top;
      dragStartX = sx;
      dragStartY = sy;
      hasDragged = false;

      const hit = getNodeAt(sx, sy);
      if (hit) {
        draggedNode = hit;
        canvas.style.cursor = 'grabbing';
        wakeSimulation(0.4);
      } else {
        isPanning = true;
        panStartX = sx;
        panStartY = sy;
        canvas.style.cursor = 'grabbing';
      }
    });

    window.addEventListener('mouseup', (e) => {
      if (draggedNode) {
        if (!hasDragged) {
          // Plain click on node -> navigate to article
          if (draggedNode.url && draggedNode.url !== currentPath && draggedNode.url !== '#') {
            window.location.href = draggedNode.url;
          }
        }
        draggedNode = null;
        hasDragged = false;
        canvas.style.cursor = hoveredNode ? 'pointer' : 'grab';
        wakeSimulation(0.15);
      }
      if (isPanning) {
        isPanning = false;
        hasDragged = false;
        canvas.style.cursor = hoveredNode ? 'pointer' : 'grab';
      }
    });
  }

  // --- 6. Client-Side Image Healer and Zoom Lightbox ---
  const articleImages = document.querySelectorAll('.markdown-body img, .article-content img');
  const siteBase = (typeof sitePages !== 'undefined' && sitePages.length > 0 && sitePages[0].url) 
    ? sitePages[0].url.split('/').slice(0, 2).join('/') 
    : '/your_astronotes';

  articleImages.forEach(img => {
    // 1. Error fallback handler to auto-resolve broken relative paths
    img.addEventListener('error', function() {
      const origSrc = this.getAttribute('src') || '';
      if (origSrc.startsWith('http://') || origSrc.startsWith('https://')) return;
      const filename = origSrc.split('/').pop().split('?')[0].split('#')[0];
      if (filename && !this.dataset.retried) {
        this.dataset.retried = 'true';
        this.src = `${window.location.origin}${siteBase}/assets/images/${encodeURIComponent(decodeURIComponent(filename))}`;
      }
    });

    // 2. Click to zoom modal preview for diagrams
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100vw';
      overlay.style.height = '100vh';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
      overlay.style.zIndex = '9999';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.cursor = 'zoom-out';
      overlay.style.padding = '20px';
      overlay.style.boxSizing = 'border-box';

      const bigImg = document.createElement('img');
      bigImg.src = img.src;
      bigImg.alt = img.alt || 'Full preview';
      bigImg.style.maxWidth = '92vw';
      bigImg.style.maxHeight = '92vh';
      bigImg.style.borderRadius = '4px';
      bigImg.style.boxShadow = '0 8px 30px rgba(0,0,0,0.5)';
      bigImg.style.backgroundColor = '#fff';

      overlay.appendChild(bigImg);
      overlay.addEventListener('click', () => {
        document.body.removeChild(overlay);
      });
      document.body.appendChild(overlay);
    });
  });
});

