import { notFound } from 'next/navigation';

const allowedSlugs = ['papers', 'ffcs-inator', 'contactify'];

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
  'ffcs-inator': [
    {
      name: 'Atharva Sharma',
      url: 'https://www.linkedin.com/in/atharva-sharma-vit',
      domain: 'Backend, Frontend, Database',
    },
    {
      name: 'Edum Shivansh Gupta',
      url: 'https://www.linkedin.com/in/edum-shivansh-gupta-733aa426a',
      domain: 'Backend, Frontend',
    },
    {
      name: 'Rohith Jayaraj Nambiar',
      url: 'https://www.linkedin.com/in/rohith-nambiar-496a52240/',
      domain: 'Frontend',
    },
    {
      name: 'Rupesh Tripathi',
      url: 'https://www.linkedin.com/in/rupesh-tripathi-b62583328/',
      domain: 'Frontend',
    },
    {
      name: 'Subhiksha SG',
      url: 'https://www.linkedin.com/in/subhikshasg',
      domain: 'Frontend',
    },
    {
      name: 'Upayan Mazumder',
      url: 'https://www.linkedin.com/in/upayanmazumder',
      domain: 'Frontend',
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
    <div className="flex flex-col gap-16 font-enigma items-center py-8 text-center">
      <h1 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-[#ff3b00] mt-6">Meet The {slug} Team</h1>
      {slugData[slug].map((item) => {
        return (<a href={item.url} target='_blank' className='text-white hover:text-[#ff3b00] mx-6 text-lg sm:text-xl'>{item.name} | {item.domain}</a>)
      })}
    </div>
  );
}
