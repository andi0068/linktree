import { Source_Code_Pro } from 'next/font/google';
import Image from 'next/image';

import Time from '@/lib/components/time';
import { Header, Main, Section, Anchor, Footer } from '@/components/home';
import Container from '@/components/layouts/container';
import * as TimeService from '@/services/time';
import * as path from '@/utils/path-utils';
import * as data from '@/data';

import Counter from './counter';

const mono = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400'],
});

export default async function Home() {
  const { dateTime } = await TimeService.get({ timeZone: data.author.time_zone });
  return (
    <>
      <Header.Root>
        <Container>
          <Header.TopContent>
            <Header.Image asChild>
              <Image
                alt="logo.png"
                width={64}
                height={64}
                src={path.image('logo.png')}
                sizes="64px"
              />
            </Header.Image>
            <Header.Location className={mono.className}>
              {data.author.location} — <Time dateTime={dateTime} />
            </Header.Location>
          </Header.TopContent>
          <Header.BottomContent>
            <Header.Title>{data.author.name}.</Header.Title>
            <Header.Description>{data.author.description}.</Header.Description>
          </Header.BottomContent>
        </Container>
      </Header.Root>
      <Main>
        {data.tree.branches.map((branch) => (
          <Section.Root key={branch.name}>
            <Container>
              <Section.Content>
                <Section.Title>{branch.name}</Section.Title>
                {branch.items.map((item, i) => (
                  <Anchor.Root key={i} href={item.href} icon={item.icon}>
                    <Anchor.Content>
                      <Anchor.Title>{item.label}</Anchor.Title>
                      <Anchor.Description>{item.description}</Anchor.Description>
                    </Anchor.Content>
                  </Anchor.Root>
                ))}
              </Section.Content>
            </Container>
          </Section.Root>
        ))}
      </Main>
      <Footer.Root>
        <Container>
          <Footer.Content>
            <Footer.Copyright>&copy; 2024 {data.author.name}</Footer.Copyright>
            <Counter className="px-2 h-7 text-sm text-foreground-secondary bg-background-secondary" />
          </Footer.Content>
        </Container>
      </Footer.Root>
    </>
  );
}
