/**
 *
 * @param {HTMLDivElement} element
 */
export const enviromentsComponent = (element) => {
  const html = `
        Dev: ${import.meta.env.DEV} <br />
        Prod: ${import.meta.env.Prod} <br />
        Key: ${import.meta.env.VITE_API_KEY} <br />
        Url: ${import.meta.env.VITE_BASE_URL} <br />
   `;

  element.innerHTML = html;
};
