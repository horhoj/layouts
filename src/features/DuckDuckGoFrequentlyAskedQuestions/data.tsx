import { Question } from './QuestionList/types';

export const data: Question[] = [
  {
    id: 1,
    question: 'How does DuckDuckGo make money?',
    answer: (
      <>
        We make our money from private ads on our search engine. On other search
        engines, ads are based on profiles compiled about you using your
        personal information like search, browsing, and purchase history. Since
        we don’t collect that information, search ads on DuckDuckGo are based on
        the search results page you are viewing, not on you as a person. For
        example, if you search for cars, we’ll show you ads about cars.{' '}
        <a
          href="https://spreadprivacy.com/duckduckgo-revenue-model/"
          target="_blank"
          rel="noreferrer"
        >
          Learn more
        </a>
      </>
    ),
  },
  {
    id: 2,
    question: 'What does Google know about me?',
    answer: (
      <>
        Not only does Google keep your search history forever by default, their
        trackers have been found on 75% of the top million websites, which means
        they are tracking most everywhere you go on the Internet (unless you
        stop them with DuckDuckGo!). And that’s just the tip of the iceberg.
        <a
          href="https://spreadprivacy.com/what-does-google-know-about-me/"
          target="_blank"
          rel="noreferrer"
        >
          Learn more
        </a>
      </>
    ),
  },
  {
    id: 3,
    question: 'Why use DuckDuckGo instead of Google?',
    answer: (
      <>
        Ever notice ads constantly following you around? That’s in part because
        Google tracks your searches and hides trackers on millions of websites.
        By contrast, our private search engine doesn’t track your searches and
        our{' '}
        <a href="https://duckduckgo.com/app" target="_blank" rel="noreferrer">
          DuckDuckGo browser extension and mobile app
        </a>{' '}
        block Google’s (and many other companies’) trackers across the Internet,
        helping to keep your browsing history more private, as it should be. And
        that’s just the beginning — by using DuckDuckGo you also escape the
        manipulation of the filter bubble and can use the Internet faster (after
        all that tracking code is disabled).{' '}
        <a
          href="https://spreadprivacy.com/why-use-duckduckgo-instead-of-google/"
          target="_blank"
          rel="noreferrer"
        >
          Learn more
        </a>
      </>
    ),
  },
  {
    id: 4,
    question: 'How do DuckDuckGo search results compare to Google’s?',
    answer: (
      <>
        DuckDuckGo search gives you truly private search results without
        tradeoffs in result quality. We have everything you’ve come to expect in
        an online search experience, and a few
        <a
          href="https://duckduckgo.com/bang"
          target="_blank"
          data-id="4-t0"
          rel="noreferrer"
        >
          bonus features
        </a>{' '}
        that make searching the Internet not only private, but also a bit more
        fun! And, on top of that, because there is no search history on
        DuckDuckGo, you escape the filter bubble of manipulated results.{' '}
        <a
          href="https://spreadprivacy.com/is-duckduckgo-a-good-search-engine/"
          target="_blank"
          data-id="4-l"
          rel="noreferrer"
        >
          Learn more
        </a>
      </>
    ),
  },
  {
    id: 5,
    question:
      'What’s the difference between using DuckDuckGo and Incognito mode?',
    answer: (
      <>
        It is a myth that you can’t be tracked while using so-called “Incognito”
        mode. In fact, Incognito mode mainly just deletes information on your
        computer and does nothing to stop Google from saving your searches, nor
        does it stop companies, Internet service providers, or governments from
        being able to track you across the Internet. By contrast, DuckDuckGo
        search is completely anonymous and if you add our app & extension on
        top, we help keep you private when browsing off of search results.{' '}
        <a
          href="https://spreadprivacy.com/how-anonymous-is-duckduckgo/"
          target="_blank"
          rel="noreferrer"
        >
          Learn more
        </a>
      </>
    ),
  },
  {
    id: 6,
    question: 'How popular is DuckDuckGo?',
    answer: (
      <>
        We don’t track our users, so it’s actually impossible for us to know how
        many users in total are using our products. However, we are able to make
        an estimate based on the number of searches we get per month,{' '}
        <a
          href="https://duckduckgo.com/traffic"
          target="_blank"
          rel="noreferrer"
        >
          which we make public
        </a>
        . Our best guess — over 50 million people!{' '}
        <a
          href="https://spreadprivacy.com/how-many-people-use-duckduckgo/"
          target="_blank"
          rel="noreferrer"
        >
          Learn more
        </a>
      </>
    ),
  },
  {
    id: 7,
    question: 'How does the DuckDuckGo app & extension work?',
    answer: (
      <>
        The DuckDuckGo Privacy Browser mobile app and Privacy Essentials desktop
        extension both come with our best-in-class tracker blocker, encryption
        enforcer, and private search engine – all in one simple package. This
        gives you all the key privacy protection tools to search and browse
        privately, curbing the constant monitoring of your Internet activity by
        companies like Google and Facebook.{' '}
        <a
          href="https://spreadprivacy.com/how-does-the-duckduckgo-app-extension-protect-my-privacy/"
          target="_blank"
          rel="noreferrer"
        >
          Learn more
        </a>
      </>
    ),
  },
];
