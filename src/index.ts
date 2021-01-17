interface IPrettyHTML {
  htmlString: string;
}

export default class PrettyHTML implements IPrettyHTML {
  htmlString: string;

  constructor(htmlString: string) {
    this.htmlString = htmlString;
  }

  public format(): string {
    const commentRegex = /(<!--.*?-->)|(<!--[\S\s]+?-->)|(<!--[\S\s]*?$)/g;
    const htmlTab = "\t";
    let htmlIndent = "";
    let htmlResult = "";

    if (this.htmlString) {
      this.htmlString = this.htmlString.replace(commentRegex, "");
      
      const htmlArray = this.htmlString.split(/>\s*</);

      for (const htmlElement of htmlArray) {
        if (htmlElement.match(/^\/\w/)) {
          htmlIndent = htmlIndent.substring(htmlTab.length);
        }

        htmlResult += `${htmlIndent}<${htmlElement}>\r\n`;

        if (
          htmlElement.match(/^<?\w[^>]*[^]$/) &&
          !htmlElement.startsWith("input")
        ) {
          htmlIndent += htmlTab;
        }
      }
    }

    return htmlResult.substring(1, htmlResult.length - 3);
  }
}