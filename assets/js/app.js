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
  if (canvas) {
    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;
    const width = container.clientWidth || 246;
    const height = container.clientHeight || 208;
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
    const nodeMap = new Map();

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
      color: '#3366cc'
    };
    nodes.push(centerNode);
    nodeMap.set(currentPath, centerNode);

    // Find outgoing internal links on the page
    const contentLinks = document.querySelectorAll('.markdown-body a');
    const addedUrls = new Set([currentPath]);

    contentLinks.forEach(a => {
      if (!a.href || a.href.startsWith('#') || a.href.startsWith('mailto:')) return;
      try {
        const u = new URL(a.href, window.location.origin);
        if (u.origin !== window.location.origin) return;
        if (addedUrls.has(u.pathname)) return;
        addedUrls.add(u.pathname);

        const nodeTitle = a.textContent.trim() || u.pathname.split('/').pop().replace(/\.html$/, '');
        const angle = Math.random() * Math.PI * 2;
        const dist = 45 + Math.random() * 40;
        const node = {
          id: 'node-' + nodes.length,
          title: nodeTitle,
          url: a.href,
          x: width / 2 + Math.cos(angle) * dist,
          y: height / 2 + Math.sin(angle) * dist,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: 4,
          isCenter: false,
          color: '#54595d'
        };
        nodes.push(node);
        links.push({ source: centerNode, target: node });
      } catch (err) {}
    });

    // If page has few links, add sibling notes from sitePages
    const sp = window.sitePages || (typeof sitePages !== 'undefined' ? sitePages : []);
    if (nodes.length < 5 && Array.isArray(sp) && sp.length > 0) {
      const currentFolder = currentPath.split('/').slice(0, -1).join('/');
      sp.forEach(p => {
        if (nodes.length >= 14 || !p.url || addedUrls.has(p.url)) return;
        if (p.url.includes(currentFolder) && p.url !== currentPath) {
          addedUrls.add(p.url);
          const angle = Math.random() * Math.PI * 2;
          const dist = 50 + Math.random() * 35;
          const node = {
            id: 'node-' + nodes.length,
            title: p.title,
            url: p.url,
            x: width / 2 + Math.cos(angle) * dist,
            y: height / 2 + Math.sin(angle) * dist,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: 3.5,
            isCenter: false,
            color: '#a2a9b1'
          };
          nodes.push(node);
          links.push({ source: centerNode, target: node });
        }
      });
    }

    // Force simulation loop
    let draggedNode = null;
    let hoveredNode = null;

    function step() {
      // Coulomb repulsion between all node pairs
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          let dx = b.x - a.x;
          let dy = b.y - a.y;
          let dist = Math.sqrt(dx * dx + dy * dy) || 1;
          if (dist < 120) {
            const force = (800 / (dist * dist));
            const fx = (dx / dist) * force;
            const fy = (dy / dist) * force;
            if (a !== draggedNode && !a.isCenter) { a.vx -= fx; a.vy -= fy; }
            if (b !== draggedNode && !b.isCenter) { b.vx += fx; b.vy += fy; }
          }
        }
      }

      // Hooke spring attraction along edges
      links.forEach(l => {
        const dx = l.target.x - l.source.x;
        const dy = l.target.y - l.source.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const desiredDist = 55;
        const force = (dist - desiredDist) * 0.04;
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;
        if (l.source !== draggedNode && !l.source.isCenter) { l.source.vx += fx; l.source.vy += fy; }
        if (l.target !== draggedNode && !l.target.isCenter) { l.target.vx -= fx; l.target.vy -= fy; }
      });

      // Center gravity and velocity damping
      nodes.forEach(n => {
        if (n === draggedNode) return;
        if (n.isCenter) {
          n.x += (width / 2 - n.x) * 0.08;
          n.y += (height / 2 - n.y) * 0.08;
          return;
        }
        n.vx += (width / 2 - n.x) * 0.003;
        n.vy += (height / 2 - n.y) * 0.003;

        n.vx *= 0.82;
        n.vy *= 0.82;
        n.x += n.vx;
        n.y += n.vy;

        // Keep inside canvas bounds
        const pad = n.radius + 6;
        if (n.x < pad) n.x = pad;
        if (n.x > width - pad) n.x = width - pad;
        if (n.y < pad) n.y = pad;
        if (n.y > height - pad) n.y = height - pad;
      });

      // Render Canvas
      ctx.clearRect(0, 0, width, height);

      // Draw edges
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#c8ccd1';
      links.forEach(l => {
        ctx.beginPath();
        ctx.moveTo(l.source.x, l.source.y);
        ctx.lineTo(l.target.x, l.target.y);
        ctx.stroke();
      });

      // Draw nodes
      nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = (n === hoveredNode) ? '#2a4b8d' : n.color;
        ctx.fill();

        if (n.isCenter || n === hoveredNode) {
          ctx.lineWidth = 1.5;
          ctx.strokeStyle = '#3366cc';
          ctx.stroke();
        }
      });

      requestAnimationFrame(step);
    }

    requestAnimationFrame(step);

    // Mouse & Touch Interaction
    function getNodeAt(x, y) {
      for (let i = nodes.length - 1; i >= 0; i--) {
        const n = nodes[i];
        const dist = Math.hypot(n.x - x, n.y - y);
        if (dist <= n.radius + 6) return n;
      }
      return null;
    }

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (draggedNode) {
        draggedNode.x = x;
        draggedNode.y = y;
        return;
      }

      hoveredNode = getNodeAt(x, y);
      if (hoveredNode) {
        canvas.style.cursor = 'pointer';
        if (tooltip) {
          tooltip.textContent = hoveredNode.title;
          tooltip.style.left = Math.min(x + 10, width - 170) + 'px';
          tooltip.style.top = Math.max(y - 25, 5) + 'px';
          tooltip.style.display = 'block';
        }
      } else {
        canvas.style.cursor = 'grab';
        if (tooltip) tooltip.style.display = 'none';
      }
    });

    canvas.addEventListener('mouseleave', () => {
      hoveredNode = null;
      draggedNode = null;
      if (tooltip) tooltip.style.display = 'none';
    });

    canvas.addEventListener('mousedown', (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      draggedNode = getNodeAt(x, y);
      if (draggedNode) canvas.style.cursor = 'grabbing';
    });

    window.addEventListener('mouseup', (e) => {
      if (draggedNode) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (Math.hypot(draggedNode.x - x, draggedNode.y - y) < 4) {
          if (draggedNode.url && draggedNode.url !== currentPath && draggedNode.url !== '#') {
            window.location.href = draggedNode.url;
          }
        }
        draggedNode = null;
        canvas.style.cursor = 'grab';
      }
    });
  }
});

