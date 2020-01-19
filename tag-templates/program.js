console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(msg_str, username, comment) {


    var escape_comment = comment.
        replace(/&/g, "&amp;").replace(/'/g, "&apos;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")


    var escape_username = username.replace(/&/g, "&amp;")
        .replace(/'/g, "&apos;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    return msg_str[0] + escape_username + msg_str[1] + escape_comment + msg_str[2];
}
