import cheerio from 'cheerio';
import axios from 'axios';
import getUrls from 'get-urls';

interface Event {
  eventWeekDay: string;
  eventMonthDay: string;
  eventName: string;
  eventClub: string;
  eventGuestsImg: string[];
  eventGuestsNames: string;
  eventDescription: string;
}

class GetEventService {
  public async execute(eventId: string): Promise<Event> {
    const eventUrl = `https://www.joinclubhouse.com/event/${eventId}`;
    const { data } = await axios.get(eventUrl);
    const $ = cheerio.load(data);
    const eventGuestsImg: string[] = [];

    const eventWeekDay = $(
      'div.flex.text-md.font-semibold.text-black.opacity-50 > div.uppercase',
    ).text();

    const eventMonthDay = $(
      'div.flex.text-md.font-semibold.text-black.opacity-50 > div.ml-1',
    ).text();

    const eventName = $('div.truncate.text-lg.font-semibold').text();

    const eventClub = $(
      'div.flex.items-center.text-xs.font-semibold > div.ml-1.uppercase.tracking-widest',
    ).text();

    $('div.flex.mt-2.-ml-1 > div.px-1 > div').each((i, e) => {
      const attrReturn = $(e).attr('style');
      if (attrReturn) {
        const url = getUrls(attrReturn);
        url.forEach(element => {
          eventGuestsImg.push(element);
        });
      }
    });

    const eventGuestsNames = $('div.text-sm.font-thin.mt-2 > em').text();

    const eventDescription = $('div.text-sm.font-thin.mt-2')
      .children()
      .remove()
      .end()
      .text()
      .replace(/(\r\n|\n|\r)/gm, '');

    return {
      eventWeekDay,
      eventMonthDay,
      eventName,
      eventClub,
      eventGuestsImg,
      eventGuestsNames,
      eventDescription,
    };
  }
}

export default GetEventService;
