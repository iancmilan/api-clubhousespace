import cheerio from 'cheerio';
import axios from 'axios';
import getUrls from 'get-urls';

interface Event {
  eventDate: string;
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

    const eventDate = $('div.text-gray-600.text-md').text();

    const eventName = $(
      'div.max-w-md.px-2.mt-6.text-base.text-gray-700 > div.mt-1.text-xl.font-semibold.text-black',
    ).text();

    const eventClub = $(
      'div.flex.items-center.justify-center.mt-1.text-xs.font-semibold.text-black > span',
    ).text();

    $('div.mt-4 > div.flex.items-center.justify-center > div.mx-1 > div').each(
      (i, e) => {
        const attrReturn = $(e).attr('style');
        if (attrReturn) {
          const url = getUrls(attrReturn);
          url.forEach(element => {
            eventGuestsImg.push(element);
          });
        }
      },
    );

    const eventGuestsNames = $(
      'div.px-6.mt-2.italic.font-light.text-black.text-md',
    ).text();

    const eventDescription = $(
      'div.max-w-md.px-2.mt-6.text-base.text-gray-700 > div.mt-6',
    ).text();

    return {
      eventDate: eventDate.trim().replace(/(\r\n|\n|\r)/gm, ''),
      eventName: eventName.trim(),
      eventClub: eventClub.trim().replace(/(\r\n|\n|\r)/gm, ''),
      eventGuestsImg,
      eventGuestsNames: eventGuestsNames.trim(),
      eventDescription: eventDescription.trim(),
    };
  }
}

export default GetEventService;
