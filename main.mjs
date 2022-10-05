import 'core-js/actual/set';
import { marked } from 'marked';

function serveMarkdown(r) {
  const html = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');
  
  r.headersOut['Content-Type'] = 'text/html'; 
  r.return(200, html);
}

export default { serveMarkdown };