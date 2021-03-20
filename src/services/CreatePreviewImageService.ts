import nodeHtmlToImage from 'node-html-to-image';

class createPreviewImageService {
  public async execute(
    eventId: string,
  ): Promise<string | Buffer | (string | Buffer)[]> {
    const image = await nodeHtmlToImage({
      html: `<html>

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
                <p>Sun, Jan 31, 10 PM (PST)</p><strong>⏰ Elon Musk on Good Time teste</strong>
                <div><span>From Good Time</span><img src="/icon_house.svg"></div>
              </header>
              <div class="event__Guests-sc-9bovm9-3 cuhfsm"><img src="https://clubhouseprod.s3.amazonaws.com/616_3bc1048a-806b-4d1b-aba7-c604bd522e56_thumbnail_250x250" style="width: 3.4rem; height: 3.4rem;"><img src="https://clubhouseprod.s3.amazonaws.com/977_4887016f-d774-472d-9f40-091b134a89aa_thumbnail_250x250" style="width: 3.4rem; height: 3.4rem;"><img src="https://clubhouseprod.s3.amazonaws.com/2769_7ba253ce-49ee-41e1-af15-e6bad1d2ccad_thumbnail_250x250" style="width: 3.4rem; height: 3.4rem;"><img src="https://clubhouseprod.s3.amazonaws.com/4493_cc85f9fb-1ee7-4cc8-bb43-ec28734abbdb_thumbnail_250x250" style="width: 3.4rem; height: 3.4rem;"><img src="https://clubhouseprod.s3.amazonaws.com/4602198_753c7ae2-952b-405e-97d2-964c9633eabc_thumbnail_250x250" style="width: 3.4rem; height: 3.4rem;"><img src="https://clubhouseprod.s3.amazonaws.com/311_1b52ac11-13b4-42d0-a892-e9b8701b5543_thumbnail_250x250" style="width: 3.4rem; height: 3.4rem;"></div>
              <div class="event__Infos-sc-9bovm9-4 kSyihr">
                <p>w/ Sriram Krishnan, Marc Andreessen, Steven Sinofsky, Aarthi Ramamurthy, Elon Musk, Garry Tan 🍔</p><span>Special episode of Good Time with Elon Musk. </span>
              </div>
            </div>
      </body>

      </html>`,
      puppeteerArgs: {
        defaultViewport: {
          width: 1200,
          height: 628,
        },
      },
    });

    return image;
  }
}

export default createPreviewImageService;
