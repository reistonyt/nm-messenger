var ticker = ''

class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
      
    }

 
    parse(message) {
      const lowercase = message.toLowerCase()
      

      if (lowercase.includes("hello")) {
          this.actionProvider.greet();
      }

      if (lowercase.includes("earnings")) {
        this.actionProvider.searchStockEarnings(ticker);
      }
      if (lowercase.includes("learn more about stocks")) {
        this.actionProvider.stonkLearnMore();
      }
      if (lowercase.includes("week")) {
        this.actionProvider.searchStockWeekly(ticker);
      }
      if (lowercase.includes('trade')) {
        this.actionProvider.handleStockFinder();
      }
      if (lowercase.includes('apple') || lowercase.includes("aapl")) {
        ticker = 'aapl'
        this.actionProvider.stonkResponse();
      }
      if (lowercase.includes("$")) {
        ticker = lowercase.replace('$', '')
        this.actionProvider.searchStockBasic(lowercase)
      }
      if (lowercase.includes("bye")) {
        this.actionProvider.bye();
    }
    }
  }
  
  export default MessageParser;