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
        const normalizedCurrent = currentUrl.replace(/\\\/g, '/').replace(/index\\.html$/, '').replace(/\/$/, '');
        const normalizedPage = page.url.replace(/\\\/g, '/').replace(/index\\.html$/, '').replace(/\/$/, '');
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
});

