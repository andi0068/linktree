interface RequestParameter {
  timeZone: string;
}
interface ResponseBody {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  seconds: number;
  milliSeconds: number;
  dateTime: string;
  date: string;
  time: string;
  timeZone: string;
  dayOfWeek: string;
  dstActive: boolean;
}

const config = {
  uri: 'https://timeapi.io/api/Time/current/zone',
  init: {
    next: { revalidate: 0 },
  },
};

export async function get({ timeZone }: RequestParameter) {
  return fetch(`${config.uri}?timeZone=${timeZone}`, config.init).then(
    (res) => res.json() as Promise<ResponseBody>,
  );
}
