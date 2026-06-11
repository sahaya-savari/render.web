const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
const style = '<style>button[aria-label="Toggle theme"] { left: auto !important; right: 20px !important; bottom: 20px !important; position: fixed !important; z-index: 9999 !important; top: auto !important; }</style>';
html = html.replace('</head>', style + '</head>');
fs.writeFileSync('index.html', html);
