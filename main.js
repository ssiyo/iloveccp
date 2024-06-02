/*
icebreaker
conflows[
    conflow 1
    conflow 2
    . . .
]

conflow[
    initial function

    messages [
        msg 1
        msg 2
            . . .
    ]

prompt(if one choice, no prompting, to the next conflow)
        choice 1
            text
            next conflow
        choice 2
    . . .
]
*/

class C {
  // CHOICE
  constructor(content, nextConFlow) {
    this.content = content;
    this.nextConFlow = nextConFlow;
  }
}
class M {
  // MESSAGE
  constructor(author, content) {
    this.author = author;
    this.content = content;
  }
}
class CF {
  // CONVERSATION FLOW
  constructor(init, messages, choices) {
    this.init = init;
    this.messages = messages;
    this.choices = choices;
  }
}

function fromCFArrayToObject(CFArray) {
  let choicesObj;
  if (CFArray[2].length == 0) {
    choicesObj = null;
  } else {
    choicesObj = CFArray[2].map((c) => new C(c[0], c[1]));
  }
  return new CF(
    CFArray[0],
    CFArray[1].map((m) => new M(m[0], m[1])),
    choicesObj
  );
}

// USE PROFILE NAMES AS AUTHORS
const authors = {
  x: {
    // player status informer and feedbacker
    username: "Xi Jinping",
    profile: "profiles/xi jinping.jpg",
  },
  br: {
    // the investigator, and execution team captain
    username: "Bruce Lee",
    profile: "profiles/bruce lee.jpg",
  },
  y: {
    // Xi Jinping assistant
    username: "Yun",
    profile: "profiles/yun.jpg",
  },
  t: {
    // tianmen protestor, old wise man, fights for human rights
    username: "Tiananmen Veteran",
    profile: "profiles/ching-cheng-hanji.jpg",
  },
  w: {
    // hype and self-help reader
    username: "Lee Wok",
    profile: "profiles/the-wok.jpg",
  },
  b: {
    // son of CCP who can do anything, he is super cool
    username: "Shang ABi",
    profile: "profiles/shang abi.jpg",
  },
  s: {
    // super idol, my CCP question translator, gifs, secretly being tortured but happy and sings, was brainwashed
    username: "Super Idol",
    profile: "profiles/super-idol.jpg",
  },
  n: {
    // facts and security ceo
    username: "Xon Yee Na",
    profile: "profiles/xon-xina.jpg",
  },
  a: {
    // angry
    username: "Mad Jung",
    profile: "profiles/mad.jpg",
  },
  k: {
    // wrapped kitten
    username: "Kitty",
    profile: "profiles/kitten.jpg",
  },
};
const videoDuration = {
  "shang abi dancing in the gym.mp4":10,
  "shang abi watermelon.mp4":8,
  "super idol.mp4":15
}
let socialCredits = 0;

const icebreaker = "0";

const conflows = {
  0: [
    () => {},
    [
      ["y", "piece 040689"],
      ["y", "sit here next to me"],
      ["y", "<img src='profiles/yun.jpg'>"],
      ["y", "play the CCP song"],
    ],
    [["*playing the CCP music (not propaganda)*", "1"]],
  ],
  1: [
    () => {
      document.querySelector("audio").play();
    },
    [
      ["n", "<img src='profiles/xon-xina.jpg'>"],
      ["n", "<img src='videos/xon xina dance.gif'>"],
      ["n", "BANGER"],
      [
        "n",
        "i always listen to this on my way to deliver spying reports to the supreme leader",
      ],
      ["n", "Lee Wok, show us some dance moves"],
      ["w", "<img src='videos/sus wok.gif'>"],
      ["w", "Super Idol is the dancer here"],
      ["s", "am i?"],
      ["y", "do not pressure him, the brainwashing tired him this morning"],
      ["s", "was i brainwashed?"],
      ["w", "reprogram your mind and wash it from negativity for success"],
      ["y", "can someone please put a tape on this Wok"],
      ["t", "expected reaction, suppression"],
      ["t", "you ugly egg head"],
      ["n", "QUIET, i am trying to enjoy this masterpiece"],
      [
        "s",
        `
<video controls>
  <source src="videos/super idol.mp4" type="video/mp4">
  Your browser does not support the video.
</video>
      `,
      ],
      [
        "n",
        "WHAT? what is this? this man is singing something else, and interuppting the song",
      ],
      ["y", "how dare you Super Idol De Chengon?"],
      ["y", "- 30 social credits for Super Idol"],
      [
        "b",
        `
<video controls>
  <source src="videos/shang abi watermelon.mp4" type="video/mp4">
  Your browser does not support the video.
</video>
      `,
      ],
      ["b", "why did you drop my watermelon man"],
      [
        "y",
        "you are the son of the supreme leader, stop dancing and eating in the middle of a social credit test",
      ],
      ["b", "Xon Xi, tape his mouth"],
      ["n", "yes sir, *tapes Yun*"],
      [
        "b",
        "super idol, what do you think of doing a collab? you are talented",
      ],
      ["s", "i need the permission of the supreme leader"],
      ["y", "*untapes*"],
      ["y", "+ 15 social credits for Super Idol"],
      ["n", "everyone, silence, the supreme leader has arrived"],
      [
        "n",
        "super idol, tranlsate or we will eliminate more of your familly members",
      ],
      [
        "n",
        "staaaaaaand up, the supreme leader Xi Jinping is about to bless us with his presence",
      ],
      ["x", "<img src='profiles/xi jinping.jpg'>"],
      ["n", "*stood up*"],
      ["y", "*stood up*"],
      ["s", "*stood up*"],
      ["b", "*stood up*"],
      ["w", "*stood up*"],
      ["t", "*stayed sit*"],
    ],
    [
      ["*stand up*", "stood up"],
      ["*stay sit*", "stayed sit"],
    ],
  ],
  "stayed sit": [
    () => {
      socialCredits -= 200;
    },
    [
      ["x", "坐下\n这是谁？"],
      ["s", "sit down\nwho is this ?"],
      ["y", "this is piece 50689"],
      ["x", "他为什么不坐下来？\n让执行团队做好这件事的准备"],
      [
        "s",
        "why is he sitting down?\nprepare the execution team for this thing",
      ],
      ["y", "- 200 social credits"],
      ["n", "yes sir"],
    ],
    [["", "stood up"]],
  ],
  "stood up": [
    () => {},
    [
      ["x", "让我们今天和每一天都为中国共产党尽力而为"],
      ["s", "let us do our best for the CCP today, and everyday"],
      ["x", "50689，这个社会信用测试将决定你的死亡率"],
      [
        "s",
        "piece 50689, this social credit test will determine your mortality",
      ],
      ["x", "带上调查员"],
      ["s", "bring the investigator"],
      ["y", "*calling execution team captain*"],
      ["br", "ni hao ma"],
      ["b", "look at you, did you gain some weigh"],
      ["br", "i only gain muscle, and peace of mind"],
      ["w", "just like water, balanced"],
      ["br", "time is gold, where is the piece 50689"],
      ["br", "<img src='profiles/bruce lee.jpg'>"],
      ["w", "he might be a martial artists, but he is the nicest in the room"],
      ["br", "<img src='profiles/bruce-smiling.jpg'>"],
      ["br", "here is your first question: rice or burger"],
      ["w", "remember to follow your heart"],
    ],
    [
      ["burger", "burger fan"],
      ["rice", "rice fan"],
      ["both", "burger and rice enjoyer"],
    ],
  ],
  "rice fan": [
    () => {
      socialCredits += 30;
    },
    [
      ["br", "+ 30 social credits"],
      [
        "b",
        "i like burgers, meat is muscle, rice is brain, brain can not move, no brain",
      ],
      [
        "y",
        "all you know is muscles...no, you actually know nothing, let us move to the next question quickly, the CCP has a lot of pieces today",
      ],
      ["n", "he is right, time is gold"],
      ["w", "indeed"],
      ["b", "let us change the subject, let us talk about cats"],
      ["x", "是的，我的儿子，下一个问题是关于猫的"],
      ["s", "yes, my son, next question is about cats"],
      ["x", "把罪犯带进来"],
      ["s", "bring in the criminal"],
    ],
    [["", "animal abuse"]],
  ],
  "burger fan": [
    () => {
      socialCredits -= 30;
    },
    [
      ["br", "- 30 social credits"],
      ["x", "*sus*"],
      ["w", "<img src='videos/sus wok.gif'>"],
      ["n", "arrest him, to torture chamber"],
      ["b", "NO, i like burgers too"],
      ["b", "+ 100"],
      ["br", "let us not jump into conclusions"],
      ["x", "克森，带他来"],
      ["s", "Xon, bring him"],
    ],
    [["", "animal abuse"]],
  ],
  "burger and rice enjoyer": [
    () => {
      socialCredits += 10;
    },
    [
      ["br", "+ 10 social credits"],
      ["w", "balance is always good, take some deep breathes"],
      ["t", "you mean, burger on rice ?"],
      ["s", "no, separately"],
      ["t", "oh"],
      ["x", "克森，我们的客人"],
      ["s", "Xon, our guest"],
    ],
    [["", "animal abuse"]],
  ],
  "animal abuse": [
    () => {},
    [
      ["n", "here, stand up straight and stop talking with the cat"],
      [
        "a",
        "where the fuck is my rice meat, i had it on my bowl when i left you near it",
      ],
      ["k", "fuck off"],
      ["a", "stop making me angry, i want my meat"],
      ["k", "suck my meat"],
      ["w", "guys, guys, stop fighting, take some deepbreathes"],
      ["k", "take my deepthroat"],
      ["n", "* slaps the kitty *"],
      ["b", "security, punish Xon"],
      ["br", "<img src='profiles/bruce serious.jpg'>"],
      ["br", "YEHAAAAA"],
      ["n", "* left the room unconscious *"],
      ["br", "what do you think of animal abuse"],
    ],
    [
      ["animals do not need rights", "cat abuse is good"],
      ["as long as animal likes CCP, we like him too", "CCP animal"],
      ["all creatures deserve rights", "animal abuse is bad"],
    ],
  ],
  "cat abuse is good": [
    () => {
      socialCredits += 5000;
    },
    [
      ["y", "+ 5000 social credits"],
      ["k", "fuck you"],
      ["a", "you are a crazy piece"],
      ["a", "piece, of shit"],
      ["n", "take kitty to execution box and throw mad jung out of here"],
    ],
    [["", "one child policy"]],
  ],
  "CCP animal": [
    () => {
      socialCredits += 100;
    },
    [
      ["x", "我想我开始喜欢你了"],
      ["s", "i think i am starting to like you"],
    ],
    [["", "one child policy"]],
  ],
  "animal abuse is bad": [
    () => {
      socialCredits -= 50;
    },
    [
      ["x", "hmm"],
      ["y", "- 50 social credits"],
      [
        "t",
        "yes son, you are right and never let these airheads change your view",
      ],
      ["k", "i love you"],
      ["y", "all creatures...you did not just say that"],
      ["a", "you mean all creatures except cats, right?"],
      [
        "y",
        "no, he meant all creatures in china and contribute to the CCP, right?",
      ],
      ["br", "we all heard it clearly, and we all know what that means"],
      ["br", "Xon Xina, hold him for me"],
      ["n", "yes sir"],
      [
        "y",
        "you did this to yourself, how could you not know there are no animal abuse laws",
      ],
      [
        "t",
        "kid, die for what you think is right, any other death is a permanent death",
      ],
      ["br", "this piece wishes to die"],
      ["b", "leave him alone"],
      ["br", "OYAAAAAAH"],
      ["b", "*unconscious*"],
      [
        "br",
        "any kind of intervention to the work of the CCP is untolerated no matter what the status of the actor",
      ],
      [
        "w",
        "bruce, did you not say we should not jump into conclusions, give him an other chance, mercy bruce",
      ],
      ["br", ". . ."],
      ["br", "yun, ask him next"],
      ["y", "you almost died there, so i will ask an easier question"],
      ["y", "do humans have rights"],
    ],
    [
      ["not uyghurs", "uyghurs have no rights"],
      ["when chinese and CCP obedient", "loyal chinese has rights"],
      ["only Xi Jinping has rights", "only Xi Jinping has rights"],
      ["yes", "humans have rights"],
    ],
  ],
  "uyghurs have no rights": [
    () => {
      socialCredits += 200;
    },
    [["x", "+ 200 social credits"]],
    [["", "one child policy"]],
  ],
  "loyal chinese has rights": [
    () => {
      socialCredits += 30;
    },
    [
      ["x", "+ 30 social credits"],
      ["y", "perfect"],
      ["y", "i am impressed"],
      ["t", "really...i am disappointed"],
    ],
    [["", "one child policy"]],
  ],
  "only Xi Jinping has rights": [
    () => {
      socialCredits += 15999;
    },
    [
      ["x", "+ 15999 social credits"],
      ["y", "give him some of your carrots as a reward"],
      ["b", "shares"],
    ],
    [["", "one child policy"]],
  ],
  "humans have rights": [
    () => {
      socialCredits -= 300;
    },
    [
      ["br", "- 300 social credits"],
      [
        "y",
        "i relly tried my best to help you with that last question, but you are stubborn",
      ],
      [
        "y",
        "here is an easier scenario, a uyghur escaped from torture camps and is hiding in your house",
      ],
      ["br", "<img src='profile/bruce serious.jpg'>"],
      ["br", "what do you do"],
    ],
    [
      ["report to CCP", "report uyghur"],
      ["help", "help uyghur"],
      [
        "help and persuade to give position of other hidden uyghurs",
        "persuade uyghur",
      ],
    ],
  ],
  "report uyghur": [
    () => {
      socialCredits += 2000;
    },
    [
      ["br", "it seems your sanity has returned"],
      ["br", "+ 2000 social credits"],
    ],
    [["", "one child policy"]],
  ],
  "help uyghur": [() => {}, [["br", "HUYAAAAA"]], []],
  "persuade uyghur": [
    () => {
      socialCredits += 4000;
    },
    [
      ["y", "+ 20 IQ"],
      ["y", "+ 4000 social credits"],
    ],
    [["", "one child policy"]],
  ],
  "one child policy": [
    () => {},
    [
      ["br", "i almost executed you, be careful with the coming questions"],
      ["br", "hey, super idol"],
      ["s", "Lee, what do you want"],
      ["br", "look at me super idol, do you think i am stupid, look at me"],
      ["s", "*crying*"],
      ["n", "here is the analysis results we took from their toilet pipes"],
      [
        "br",
        "explain this super idol, EXPLAIN, Xon Yee hand the paper to the leader",
      ],
      ["x", "你怎么敢做这种违法的事"],
      ["x", "我简直不敢相信，我差点就让你和我的 abi 合作了"],
      ["b", "what, what did he do?"],
      ["x", "*hands paper*"],
      ["b", "SUPER IDOL'S WIFE IS PREGNANT WITH A SECOND CHILD"],
      ["w", "<img src='videos/sus wok.gif'>"],
      [
        "s",
        "NO, NO, NONONONO, that is impossible, take the test again, there must be a mistake",
      ],
      ["br", "shut you goddam ass up"],
      ["br", "there is one way to solve the issue here"],
      ["s", "please, she is the last person i remember i love"],
    ],
    [
      ["abortion", "abort second child"],
      ["divorce and report wife to CCP", "report wife"],
      ["keep the baby", "keep second child"],
    ],
  ],
  "abort second child": [
    () => {
      socialCredits += 1000;
    },
    [
      ["s", ". . ."],
      ["br", "hehe, great, you are wise"],
      ["br", "+ 1000 social credits"],
      ["n", "correct"],
      ["w", "less is more, and more is less"],
    ],
    [["", "travel country"]],
  ],
  "report wife": [
    () => {
      socialCredits += 333;
    },
    [
      ["x", "哈哈哈，这件作品可能是最好的作品之一"],
      ["y", "hahaha, this piece might be one of the best ones"],
      ["y", "+ 333 social credits"],
    ],
    [["", "travel country"]],
  ],
  "keep second child": [
    () => {},
    [
      ["br", "Xon, schedule an execution date for super idol tomorrow"],
      ["br", "and this spy"],
    ],
    [],
  ],
  "travel country": [
    () => {},
    [
      ["y", "where do you want to travel"],
      [
        "b",
        "i want to go to america, i heard girls there are prettier than the chinese",
      ],
    ],
    [
      ["nowhere, stay in china", "stay in china"],
      ["USA", "travel to USA"],
      ["Taiwan", "travel to Taiwan"],
      ["whereever Xi Jinping lives", "travel to where Xi Jinping"],
    ],
  ],
  "stay in china": [
    () => {
      socialCredits += 700;
    },
    [["y", "+ 700 social credits"]],
    [["", "tempt to countrify taiwan"]],
  ],
  "travel to USA": [
    () => {
      socialCredits -= 300;
    },
    [["y", "- 300 social credits"]],
    [["", "tempt to countrify taiwan"]],
  ],
  "travel to where Xi Jinping": [
    () => {
      socialCredits += 2000;
    },
    [["y", "+ 2000 social credits"]],
    [["", "tempt to countrify taiwan"]],
  ],
  "travel to Taiwan": [
    () => {
      socialCredits -= 40023888;
    },
    [["y", "- 40023888 social credits"]],
    [["", "vpn use"]],
  ],
  "tempt to countrify taiwan": [
    () => {},
    [
      ["b", "i like the country taiwan, people there have good gyms"],
      ["y", "abi, no, you are the son of Xi Jinping, do not say that"],
      ["y", "so piece 50689, where is the country taiwan located at"],
      ["w", "*whispering*: you can do it"],
    ],
    [
      ["located in East Asia", "located taiwan"],
      ["taiwan is not a country", "taiwan is not a country"],
      ["what are you talking about", "tai-what"],
    ],
  ],
  "located taiwan": [
    () => {
      socialCredits -= 12000;
    },
    [
      ["x", "sus face"],
      ["w", " sus face"],
      ["b", "+ 999 social credits"],
      ["y", "- 12999 social credits"],
    ],
    [["", "vpn use"]],
  ],
  "taiwan is not a country": [
    () => {
      socialCredits += 6000;
    },
    [
      ["x", "good"],
      ["y", "+ 6000 social credits"],
    ],
    [["", "vpn use"]],
  ],
  "tai-what": [
    () => {
      socialCredits += 300;
    },
    [
      ["x", "我明白你在那里做了什么，很好的答案"],
      ["s", "i see what you did there, nice answer"],
      ["y", "idiot, the answer was obvious, you could have scored higher"],
      ["y", "+ 300 social credits"],
    ],
    [["", "vpn use"]],
  ],
  "vpn use": [
    () => {},
    [["y", "do you use a VPN?"]],
    [
      ["yes", "uses vpn"],
      ["no", "no vpn"],
    ],
  ],
  "uses vpn": [
    () => {
      socialCredits -= 34000;
    },
    [["y", "- 34000 social credits"]],
    [["", "chinese sim card"]],
  ],
  "no vpn": [
    () => {
      socialCredits += 800;
    },
    [["y", "+ 800 social credits"]],
    [["", "tiktok activity"]],
  ],

  "tiktok activity": [
    () => {},
    [
      [
        "b",
        `
<video controls>
  <source src="videos/shang abi dancing in the gym.mp4" type="video/mp4">
  Your browser does not support the video.
</video>
      `,
      ],
      ["y", "STOP IT"],
      ["b", "hey hey hhey, yo man"],
      ["s", "come on that was uncool, give him the phone back"],
      ["y", "HOW RETARDED ARE YOU"],
      [
        "y",
        "leaking the location of the supreme leader on social media, did you not notice his face was in the video",
      ],
      ["b", "so you want me to dance with him?"],
      ["y", "i am deleting you tiktko account"],
      ["b", "WHAT"],
      ["s", "WHAT"],
      ["t", "WHAT"],
      ["w", "i think you are going too far with that"],
      ["n", "yeah, i agree, let the man enjoy himself and have an audience"],
      [
        "y",
        "listen to me everyone, whoever has tiktok on this room shall immediately uninstall it or i will report him to the CCP",
      ],
      ["n", "can i delete after reaching 20K followers first"],
      ["y", "NO, delete now, give me that, *uninstall*"],
      ["y", "here abi, i uninstalled tiktok"],
      ["w", "do not look at me, i am in my dopamine detox period"],
      ["t", "ok, ok, i am trying to uninstall but where is the button"],
      [
        "y",
        "here, wait, what is that? your username is bigbossdaddy, how? so you were that one that liked my dance last year?",
      ],
      [
        "t",
        "i do not remember, but i promise if i knew i would not have done so",
      ],
      ["y", "here i uninstalled it"],
      ["br", "i do not have a phone"],
      ["x", "*uninstalling secretly under the table*"],
      ["s", "uninstalled"],
      ["y", "piece 50689, why do you have tiktok?"],
    ],
    [
      ["to support fellow CCP content creators", "CCP tiktokers"],
      ["to self-drug", "self drug"],
      ["how do you know", "notice tracking"],
      ["spying on the enemy", "social media spy"],
    ],
  ],
  "CCP tiktokers": [
    () => {
      socialCredits += 600000;
    },
    [
      ["y", "+ 4000 social credits"],
      ["s", "+ 106000 social credits"],
      ["b", "880000 social credits"],
    ],
    [["", "chinese sim card"]],
  ],
  "self drug": [
    () => {},
    [["w", "the best dream is reality"]],
    [["", "chinese sim card"]],
  ],
  "notice tracking": [
    () => {
      socialCredits -= 400;
    },
    [
      ["y", "you are not is a position to ask"],
      ["y", "- 400 social credits"],
    ],
    [["", "chinese sim card"]],
  ],
  "social media spy": [
    () => {
      socialCredits += 200;
    },
    [["y", "+ 200 social credits"]],
    [["", "chinese sim card"]],
  ],
  "chinese sim card": [
    () => {},
    [["n", "how about the chinese sim card, is your phone equiped with it"]],
    [
      ["yes", "uses sim card"],
      ["no", "no sim card"],
    ],
  ],
  "uses sim card": [
    () => {
      socialCredits += 300;
    },
    [["y", "+ 300 social credits"]],
    [["", "spyware"]],
  ],
  "no sim card": [
    () => {
      socialCredits -= 560300;
    },
    [["y", "- 560300 social credits"]],
    [["", "screen time"]],
  ],
  spyware: [
    () => {},
    [
      [
        "y",
        "why did you delete pictures of Xi Jinping on 2023-04-18 (the day you bought a new microwave) at 12:34:22 ?",
      ],
    ],
    [
      ["mind your own business", "refused to answer"],
      ["it was a mistake", "mistakenly deleted"],
      ["i found a higher quality picture", "higher quality"],
      ["they attract bees", "attracts bees"],
    ],
  ],
  "refused to answer": [
    () => {
      socialCredits -= 300;
    },
    [
      ["n", "damn"],
      ["y", "- 300 social credits"],
    ],
    [["", "screen time"]],
  ],
  "mistakenly deleted": [
    () => {
      socialCredits += 500;
    },
    [["y", "+ 500 social credits"]],
    [["", "screen time"]],
  ],
  "higher quality": [
    () => {
      socialCredits += 4500;
    },
    [["y", "+ 4500 social credits"]],
    [["", "screen time"]],
  ],
  "attracts bees": [
    () => {
      socialCredits -= 59999;
    },
    [["x", "- 59999 social credits"]],
    [["", "screen time"]],
  ],

  "screen time": [
    () => {},
    [
      ["y", "abi, what is your screen time"],
      ["b", "20 hours"],
      ["y", "you sleep for 4 HOURS"],
      ["s", "is that dangerous, because i have the same screen time"],
      ["y", "what are ... people, do you not have lives"],
      ["n", "what a waste of potential"],
      ["y", "what is your screen time Xon"],
      ["n", "25 hours"],
      ["y", "WHERE DID YOU GET THAT ADDITIONAL HOUR"],
      ["n", "the supreme leader allowed me to have 25 hours a day"],
      ["y", "i see"],
      ["t", "where is the button for screen time number?"],
      ["y", "give me, here, you have 3 hours, thank god"],
      [
        "y",
        "wait, what is that? 3 hours on settings? and you have a streak of two weeks",
      ],
      [
        "y",
        "old man, what were you doing in the settings 3 hours a day for 2 weeks",
      ],
      ["t", "increasing brightness"],
      ["y", "god have... execuse me, i meant, xi jinping have mercy on me"],
      ["y", "come on piece 50689, what is your screen time"],
    ],
    [
      ["0", "0 ST"],
      ["16", "16 ST"],
      ["3", "3 ST"],
    ],
  ],
  "0 ST": [
    () => {
      socialCredits += 100;
    },
    [["y", "+ 100 social credits"]],
    [["", "gaokao"]],
  ],
  "3 ST": [
    () => {
      socialCredits += 100;
    },
    [["y", "+ 100 social credits"]],
    [["", "gaokao"]],
  ],
  "16 ST": [
    () => {
      socialCredits -= 16;
    },
    [["y", "- 16 social credits"]],
    [["", "gaokao"]],
  ],
  gaokao: [
    () => {},
    [
      [
        "y",
        "before proceeding can everyone confirm that they passed the gaokao test",
      ],
      ["t", "what is that"],
      ["n", "the national college entrance exam"],
      ["b", "i passed"],
      ["y", "thanks to your family"],
      ["s", "i passed it"],
      ["t", "i do not remember"],
      ["br", "i do not need education, life is my school"],
      ["w", "i am with bruce"],
      [
        "y",
        "you two are lucky for being allowed to say that thanks to your social credit scores",
      ],
      ["n", "i passed it twice, the chinese and english version"],
    ],
    [
      ["i also passed it", "passed gaokao"],
      ["i wrote it", "wrote gaokao"],
      ["i am not chinese", "not chinese"],
    ],
  ],
  "passed gaokao": [
    () => {
      socialCredits += 1000;
    },
    [["y", "+ 100 social credits"]],
    [["", "f on math"]],
  ],
  "wrote gaokao": [
    () => {
      socialCredits += 100000;
    },
    [["y", "+ 10000 social credits"]],
    [["", "f on math"]],
  ],
  "not chinese": [
    () => {
      socialCredits -= 199995000;
    },
    [["y", "- 199995000 social credits"]],
    [["", "f on math"]],
  ],
  "f on math": [
    () => {},
    [
      ["br", "my turn to question"],
      ["br", "The Wok has a son"],
      ["w", "i swear i only have one, please do not kill my wife"],
      [
        "br",
        "relax, it is not about your wife, your son Mr. Lee Wok scored an F on math",
      ],
      [
        "br",
        "and the right course of action the parents should take towards that child is obviously . . .",
      ],
    ],
    [
      ["devalue it", "devalue son"],
      ["give up", "give up"],
      ["overreact", "overreact"],
    ],
  ],
  "devalue son": [
    () => {
      socialCredits += 50;
    },
    [["br", "+ 50 social credits"]],
    [["", "protest reaction"]],
  ],
  overreact: [
    () => {
      socialCredits += 30;
    },
    [["br", "+ 30 social credits"]],
    [["", "protest reaction"]],
  ],
  "give up": [
    () => {
      socialCredits -= 50;
    },
    [
      ["br", "never give up"],
      ["w", "hope"],
      ["y", "- 50 social credits"],
    ],
    [["", "protest reaction"]],
  ],
  "protest reaction": [
    () => {},
    [
      ["y", "what should be done when there is a protest nearby"],
      ["t", "easy"],
      ["t", "i know the answer"],
      ["t", "anything but killing the protestors"],
      ["y", "not funny, and incorrect"],
      [
        "b",
        "i would ask someone for a dancing challenge and post it on tiktok",
      ],
      [
        "s",
        "i might do that, but we all know that protesting can take hours in some cases",
      ],
      ["s", "so i will use my bottle and wet them"],
      ["n", "wet them with your face, haha"],
      ["s", "Xon, you dirty boy"],
      ["n", "i would play the CCP music to make them stop of course"],
      [
        "t",
        "i can see you doing that, but why did you not mention you also carry assult rifles with you to protests",
      ],
      ["n", "that was an old habit"],
      ["br", "what would you do"],
      [
        "w",
        "i would open my mind to hearing their demands and take them into consideration then choose a middle ground where everyone is satisfied",
      ],
      ["y", "wait, that does not sounds right"],
      ["w", "<img src='videos/sus wok.gif'>"],
      ["w", "sorry, i meant to finally satisfy the CCP not everyone"],
      ["y", "other good options"],
    ],
    [
      ["join the troops and fight against protestors", "anti protest"],
      ["stay away", "stay away"],
      ["join the protests if the motives resonated with me", "pro protest"],
      ["take pictures of protestors for my CCP report", "protest spy"],
    ],
  ],
  "anti protest": [
    () => {
      socialCredits += 69999;
    },
    [["y", "+ 69999 social credits"]],
    [["", "tank man"]],
  ],
  "pro protest": [
    () => {
      socialCredits -= 12000500;
    },
    [["y", "- 12000500 social credits"]],
    [["", "tank man"]],
  ],
  "protest spy": [
    () => {
      socialCredits += 500000;
    },
    [
      ["y", "+ 100 IQ"],
      ["y", "+ 500000 social credits"],
    ],
    [["", "tank man"]],
  ],
  "stay away": [
    () => {
      socialCredits += 100;
    },
    [["y", "+ 100 social credits"]],
    [["", "tank man"]],
  ],
  "tank man": [
    () => {},
    [
      ["y", "Xon, did you bring that picture"],
      ["n", "yes sir, here, *hands it to bruce*"],
      ["br", "well, i almost forgot about this"],
      ["br", "take a look old man, you recognize this"],
      ["t", "me on my youth and the guy on that leading tank"],
      ["n", "was me huh"],
      ["br", "piece 50689, describe the picture"],
      ["br", "<img src='profiles/tank man.jpg'>"],
    ],
    [
      ["where is the picture", "dora"],
      ["lost old man", "lost"],
      ["i see nothing", "blind"],
      ["brave citizen facing death for life of others", "likes tank man"],
    ],
  ],
  dora: [
    () => {
      socialCredits -= 50;
    },
    [["br", "- 50 social credits"]],
    [["", "june 4 1989"]],
  ],
  lost: [
    () => {
      socialCredits += 500;
    },
    [["br", "+ 500 social credits"]],
    [["", "june 4 1989"]],
  ],
  blind: [
    () => {
      socialCredits += 1000900;
    },
    [["br", "+ 1000900 social credits"]],
    [["", "june 4 1989"]],
  ],
  "likes tank man": [
    () => {
      socialCredits -= 1500000090000;
    },
    [["br", "- 1500000090000 social credits"]],
    [["", "june 4 1989"]],
  ],
  "june 4 1989": [
    () => {},
    [
      [
        "br",
        "now a quick question, what happened on tiananmen square on june 4, 1989",
      ],
      ["b", "i reached 10K followers"],
      ["s", "i bought my first bottle"],
      ["t", "are you thinking the same as me"],
    ],
    [
      ["nothing", "nothing"],
      ["massacre of protesting students", "massacre"],
      ["NOTHING", "NOTHING"],
    ],
  ],
  nothing: [
    () => {
      socialCredits += 500;
    },
    [["br", "+ 500 social credits"]],
    [],
  ],
  NOTHING: [
    () => {
      socialCredits += 50000;
    },
    [["br", "+ 50000 social credits"]],
    [],
  ],
  massacre: [
    () => {
      socialCredits -= 158000045000200;
    },
    [["br", "- 158000045000200 social credits"]],
    [],
  ],
};

// if negative social credits score, execution after two days
// if zero score, should take the test again
// if positive, nothing

// OBJECTIFYING
for (cfid in conflows) {
  conflows[cfid] = fromCFArrayToObject(conflows[cfid]);
}
