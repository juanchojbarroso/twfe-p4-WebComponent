// Crear una página con un Web Component simple que permita verificar
// el ciclo de vida de una web component a través de la consola.
// En cada estado del web component mostrará un mensaje en consola
// cuando se active la función de callback pertinente:
// 1-Creado, 2-Adjuntado al DOM, 3–Separado del DOM, 4-Cambio en los atributos.

class EventCard extends HTMLElement {
  constructor (){
    super()
    console.debug("1-Creado")
  }

  connectedCallback() {
    console.debug("2-adjuntado-al-dom")
  }
  disconnectedCallback() {
    console.debug("3-separado-del-dom")
  }

  static get observedAttributes() {
    return ["event-title"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.debug("4-cambio-en-los-atributos")
    switch (name) {
      case "event-title": {
        console.debug("Se detecto un cambio en atributo", name, oldValue, newValue)
        break;
      }
      default: {
        console.log("unhandled attribute change", name, oldValue, newValue);
        break;
      }
    }
  }
  
}

window.customElements.define("event-card", EventCard)
