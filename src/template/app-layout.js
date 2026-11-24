import { createHeader } from './app-header.js';
import { createSidebar } from './app-sidebar.js';

function createappLayout({sectionTitle, navigationItems}) {

            return ` <div class="app-layout"> 
            ${createHeader(sectionTitle)}
    ${createSidebar(navigationItems)}
    <main class="app-main"> Aca se encuentra el contenido principal </main> 
    </div>`;
}



function handleLayoutClick(event, LayoutElement) {

}

export function mountAppLayout (rootElement, opciones) {  
rootElement.innerHTML = createappLayout(opciones);
const LayoutElement = document.querySelector('.app-layout');
LayoutElement.addEventListener('click', (event) => (handleLayoutClick(event, LayoutElement)
));
}
