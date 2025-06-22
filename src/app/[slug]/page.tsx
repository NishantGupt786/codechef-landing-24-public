import { notFound } from 'next/navigation';

const allowedSlugs = ['papers', 'ffcs', 'contactify'];

const slugData: Record<(typeof allowedSlugs)[number], {
  name: string;
  url: string;
  domain: string;
}[]> = {
  papers: [
    {
      name: 'Jane Doe',
      url: 'https://linkedin.com/in/janedoe',
      domain: 'research',
    },
    {
      name: 'John Doe',
      url: 'https://github.com/johndoe-papers',
      domain: 'machine-learning',
    }
  ],
  ffcs: [
    {
      name: 'Jane Doe',
      url: 'https://janedoe.dev/ffcs',
      domain: 'webdev',
    },
    {
      name: 'John Doe',
      url: 'https://twitter.com/johndoe_ffcs',
      domain: 'design',
    }
  ],
  contactify: [
    {
      name: 'Jane Doe',
      url: 'https://instagram.com/janedoe_contactify',
      domain: 'marketing',
    },
    {
      name: 'John Doe',
      url: 'https://contactify.app/johndoe',
      domain: 'product-management',
    }
  ]
};

type PageProps = {
  params: {
    slug: string;
  };
};

export default function SlugPage({ params }: PageProps) {
  const { slug } = params;

  if (!allowedSlugs.includes(slug)) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-12 font-enigma items-center py-8 text-center">
      <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-[#ff3b00]">Meet The {slug} Team</h1>
      {slugData[slug].map((item) =>{
        return (<a href={item.url} target='_blank' className='text-white hover:text-[#ff3b00] mx-6 text-lg sm:text-xl'>{item.name} | {item.domain}</a>)
      })}
    </div>
  );
}
