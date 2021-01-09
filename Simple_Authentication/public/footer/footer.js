const currentYear = new Date().getFullYear();

const footerCopyright = document.getElementById("footer_bar");
const copyrightElement = document.createTextNode("By Nicholas Tureczek © "+ currentYear);

footerCopyright.appendChild(copyrightElement);