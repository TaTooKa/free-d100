/* global $docsify */
/**
 * docsify-plugin-symbol-icons
 * Wraps every Ⓘ (U+24D8) and Ⓢ (U+24C8) in the rendered Markdown with a
 * styled <span>, so custom.css can colour them. Each span carries a native
 * title tooltip plus an aria-label for screen readers.
 */
(function () {
  'use strict';

  function symbolIcons(hook) {
    const MAP = {
      'Ⓘ': 'instinctive-skill-icon',
      'Ⓢ': 'specialized-skill-icon',
    };
    const LABELS = {
      'Ⓘ': 'Instinctive Skill (default 20%)',
      'Ⓢ': 'Specialized Skill (default 0%)',
    };
    const CHARS = /([ⒾⓈ])/;
    const SKIP = new Set(['PRE', 'CODE', 'SCRIPT', 'STYLE', 'KBD', 'SAMP']);

    function wrap(root) {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          if (!CHARS.test(node.nodeValue)) return NodeFilter.FILTER_REJECT;
          for (let p = node.parentElement; p; p = p.parentElement) {
            if (SKIP.has(p.tagName)) return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        },
      });

      const hits = [];
      while (walker.nextNode()) hits.push(walker.currentNode);

      for (const node of hits) {
        const frag = document.createDocumentFragment();
        node.nodeValue.split(CHARS).forEach((part, i) => {
          if (!part) return;
          if (i % 2 === 0) {
            frag.appendChild(document.createTextNode(part));
          } else {
            const span = document.createElement('span');
            span.className = MAP[part];
            span.textContent = part;
            span.title = LABELS[part];
            span.setAttribute('aria-label', LABELS[part]);
            frag.appendChild(span);
          }
        });
        node.parentNode.replaceChild(frag, node);
      }
    }

    // Every page load: Markdown → HTML, before it hits the DOM
    hook.afterEach((html) => {
      const tpl = document.createElement('template');
      tpl.innerHTML = html;
      wrap(tpl.content);
      return tpl.innerHTML;
    });

    // Sidebar / navbar are rendered outside the page container
    hook.mounted(() => {
      ['.sidebar-nav', '.app-nav'].forEach((sel) => {
        const el = document.querySelector(sel);
        if (el) wrap(el);
      });
    });
  }

  window.$docsify = window.$docsify || {};
  $docsify.plugins = [symbolIcons, ...($docsify.plugins || [])];
})();
