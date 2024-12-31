type Project = {
  title: string
  description: string
  imgSrc: string
  href: string
}

type ProjectsData = {
  [locale: string]: Project[]
}

const projectsData: ProjectsData = {
  en: [
    // {
    //   title: 'A Search Engine',
    //   description: `What if you could look up any information in the world? Webpages, images, videos
    //     and more. Google has many features to help you find exactly what you're looking
    //     for.`,
    //   imgSrc: '/static/images/google.png',
    //   href: 'https://www.google.com',
    // },
    // {
    //   title: 'The Time Machine',
    //   description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    //     to the desired date and press "Go". No more worrying about lost keys or
    //     forgotten headphones with this simple yet affordable solution.`,
    //   imgSrc: '/static/images/time-machine.jpg',
    //   href: '/blog/the-time-machine',
    // },
  ],

  "zh-Hant-TW": [
    // {
    //   title: '搜尋引擎',
    //   description: `如果你可以查找世界上的任何信息呢？網頁、圖片、視頻等等。Google 擁有許多功能，可以幫助你找到你正在尋找的確切信息。`,
    //   imgSrc: '/static/images/google.png',
    //   href: 'https://www.google.com',
    // },
    // {
    //   title: '時光機',
    //   description: `想像一下能夠穿越回過去或未來。只需轉動旋鈕到所需的日期，然後按下“Go”。有了這個簡單而實惠的解決方案，再也不用擔心丟失鑰匙或忘記耳機了。`,
    //   imgSrc: '/static/images/time-machine.jpg',
    //   href: '/blog/the-time-machine',
    // },
  ],
}

export default projectsData
