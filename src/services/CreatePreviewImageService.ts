import nodeHtmlToImage from 'node-html-to-image';
import GetEventService from './GetEventService';

class createPreviewImageService {
  public async execute(
    eventId: string,
  ): Promise<string | Buffer | (string | Buffer)[]> {
    const getEvent = new GetEventService();
    const {
      eventClub,
      eventDescription,
      eventGuestsImg,
      eventGuestsNames,
      eventMonthDay,
      eventName,
      eventWeekDay,
    } = await getEvent.execute(eventId);

    const eventDay = `${eventWeekDay} ${eventMonthDay}`;

    const image = await nodeHtmlToImage({
      html:
        `<html>

      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&amp;display=swap" rel="stylesheet">
        <style>
          * {
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
          }

          div {
            display: block;
          }

          body,
          input,
          textarea,
          button {
            font: 400 1rem Nunito, sans-serif;
          }

          body {
            background: rgb(241, 239, 228);
            -webkit-font-smoothing: antialiased;
          }

          .bjVfMB {
            height: 100vh;
            max-width: 720px;
            margin: 0px auto;
            padding: 2.5rem 2rem;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
            flex-direction: column;
          }

          .jsPUBv {
            width: 39rem;
            background: rgb(255, 255, 255);
            border-radius: 20px;
            box-shadow: rgb(0 0 0 / 5%) 0px 0px 60px;
            padding: 2.5rem 2rem;
            transition: box-shadow 0.2s ease 0s;
            cursor: pointer;
          }

          .bRGeGn p {
            font-size: 0.9rem;
            opacity: 0.5;
            font-weight: 600;
          }

          .bRGeGn strong {
            display: block;
            font-size: 1.3rem;
          }

          .bRGeGn div {
            display: flex;
            -webkit-box-align: center;
            align-items: center;
          }

          .bRGeGn div span {
            font-size: 0.8rem;
            font-weight: 600;
            margin-right: 0.3rem;
          }

          .cuhfsm {
            display: flex;
            flex-direction: row;
            -webkit-box-align: center;
            align-items: center;
          }

          .cuhfsm img {
            border-radius: 40%;
            margin-top: 1rem;
          }

          .cuhfsm img+img {
            margin-left: 0.5rem;
          }

          .kSyihr p {
            line-height: 1rem;
            font-weight: 300;
            margin-top: 0.3rem;
            margin-bottom: 1rem;
          }

          .kSyihr span {
            font-weight: 300;
          }
        </style>
      </head>

      <body>
        <div id="__next">
          <div class="event__Container-sc-9bovm9-0 bjVfMB">
            <div class="event__Card-sc-9bovm9-1 jsPUBv">
              <header class="event__CardHeader-sc-9bovm9-2 bRGeGn">
                <p>{{eventDay}}</p><strong>{{eventName}}</strong>
                ` +
        `${
          eventClub
            ? '<div><span>From {{eventClub}}</span><img src="{{iconHouse}}"></div>'
            : ''
        }` +
        `</header>
              <div class="event__Guests-sc-9bovm9-3 cuhfsm">
                ` +
        `${eventGuestsImg
          .map(
            img => `<img src="${img}" style="width: 3.4rem; height: 3.4rem;">`,
          )
          .join('')}` +
        `${
          eventGuestsNames.split(', ').length - eventGuestsImg.length > 0
            ? `<strong> +${
                eventGuestsNames.split(', ').length - eventGuestsImg.length
              }</strong>`
            : ''
        }` +
        `</div>
              <div class="event__Infos-sc-9bovm9-4 kSyihr">
                <p>{{eventGuestsNames}}</p><span>{{eventDescription}}</span>
              </div>
            </div>
      </body>

      </html>`,
      puppeteerArgs: {
        defaultViewport: {
          width: 1200,
          height: 628,
        },
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      },
      content: {
        iconHouse: 'https://web-clubhousespace.vercel.app/icon_house.svg',
        eventClub,
        eventDescription: eventDescription.replace(
          '                                          —                 ',
          '',
        ),
        eventGuestsNames,
        eventName,
        eventDay,
      },
    });

    return image;
  }
}

export default createPreviewImageService;
