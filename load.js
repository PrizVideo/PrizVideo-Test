document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  function createElement(tag, attributes = {}, children = []) {
    const element = document.createElement(tag);
    for (const [key, value] of Object.entries(attributes)) {
      if (key === 'className') {
        element.className = value;
      } else if (key.startsWith('on')) {
        element.addEventListener(key.slice(2).toLowerCase(), value);
      } else {
        element.setAttribute(key, value);
      }
    }
    children.forEach(child => element.appendChild(child));
    return element;
  }

  const createSVGIcon = (path) => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('class', 'h-5 w-5');
    svg.setAttribute('viewBox', '0 0 20 20');
    svg.setAttribute('fill', 'currentColor');
    
    const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathElement.setAttribute('d', path);
    svg.appendChild(pathElement);
    
    return svg;
  };

  const homeIcon = createSVGIcon('M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z');
  const videoIcon = createSVGIcon('M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z');
  const searchIcon = createSVGIcon('M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z');
  const settingsIcon = createSVGIcon('M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z');
  const playIcon = createSVGIcon('M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z');
  const saveIcon = createSVGIcon('M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z');

  const sidebar = createElement('div', { className: 'w-16 bg-black flex flex-col items-center py-4 fixed h-full' }, [
    createElement('sl-button', { variant: 'text', size: 'large', className: 'text-primary mb-8' }, [homeIcon]),
    createElement('sl-button', { variant: 'text', size: 'large', className: 'text-gray-400 mb-8' }, [videoIcon])
  ]);

  const header = createElement('header', { className: 'bg-gray-800 text-white p-4 flex justify-between items-center ml-16' }, [
    createElement('h1', { className: 'text-2xl font-bold' }, [document.createTextNode('PrizVideo')]),
    createElement('div', { className: 'flex items-center' }, [
      createElement('input', { type: 'search', placeholder: 'Search', className: 'bg-gray-700 text-white px-4 py-2 rounded-l-full' }),
      createElement('sl-button', { variant: 'primary', size: 'medium', className: 'rounded-r-full' }, [searchIcon])
    ]),
    createElement('sl-button', { variant: 'neutral', size: 'medium' }, [settingsIcon])
  ]);

  const main = createElement('main', { className: 'flex-1 overflow-y-auto bg-gray-900 p-4 ml-16' }, [
    createElement('h2', { className: 'text-white text-xl font-semibold mb-4' }, [document.createTextNode('Welcome to PrizVideo!')]),
    createElement('div', { id: 'video-grid', className: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4' })
  ]);

  app.append(sidebar, header, main);

  function createVideoCard(video) {
    return createElement('div', { className: 'bg-gray-800 rounded-lg overflow-hidden shadow-lg' }, [
      createElement('img', { src: video.thumbnail, alt: video.title, className: 'w-full h-40 object-cover' }),
      createElement('div', { className: 'p-4' }, [
        createElement('h3', { className: 'text-white font-semibold mb-2' }, [document.createTextNode(video.title)]),
        createElement('div', { className: 'flex justify-between' }, [
          createElement('sl-button', { variant: 'primary', size: 'small' }, [playIcon, document.createTextNode(' Play')]),
          createElement('sl-button', { variant: 'neutral', size: 'small' }, [saveIcon, document.createTextNode(' Save')])
        ])
      ])
    ]);
  }

  function fetchVideos() {
    const videoGrid = document.getElementById('video-grid');
    videoGrid.innerHTML = '';

    for (let i = 0; i < 8; i++) {
      const skeleton = createElement('sl-skeleton', { effect: 'sheen', className: 'w-full h-60' });
      videoGrid.appendChild(skeleton);
    }

    setTimeout(() => {
      const videos = [
        { id: 1, title: 'First Person to Crush Their Balls With a Rock Gets 1B Dollars!', thumbnail: 'https://placehold.co/320x180' },
        { id: 2, title: 'The Journey to Making PrizVideo', thumbnail: 'https://placehold.co/320x180' },
      ];

      videoGrid.innerHTML = '';
      videos.forEach(video => {
        videoGrid.appendChild(createVideoCard(video));
      });
    }, 2000);
  }

  fetchVideos();
});
