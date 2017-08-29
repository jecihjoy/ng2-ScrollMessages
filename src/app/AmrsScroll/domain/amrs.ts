export interface MsgSlack {
    type?: string;
    user?: string;
    text?: string;
    ts?: string;
    username?: string;
    subtype?: string;
    // bot_id?: string;
  //  has_more?: boolean;

    // index?: number;
    // user?: string;
    // message?: string;
    // time?: string;
  }

  export interface Msg {
    messages: MsgSlack[];
  }
