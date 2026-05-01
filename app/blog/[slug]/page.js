import React from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import InnerHero from '@/components/InnerHero';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const blogData = {
  'professional-packers-and-movers-in-chandigarh': {
    title: 'Professional Packers And Movers In Chandigarh',
    eyebrow: 'Moving Expertly',
    date: 'May 01, 2026',
    category: 'Expert Tips',
    image: '/img/blog/ProfessionalPackersandMoversinChandigarh.png',
    description: "In this blog, we will introduce you to one of the professional packers and movers in Chandigarh, Mountain Packers & Movers, and explain why they are a top choice.",
    keywords: "professional packers and movers in Chandigarh, packers and movers in Chandigarh, professional packers and movers, packers and movers, world's professional packers and movers in Chandigarh",
    canonical: 'https://www.mountainpackersmovers.in/professional-packers-and-movers-in-chandigarh.html',
    content: (
      <>
        <p className="lead fw-bold text-navy mb-5">Moving to a new home or office can be an exciting time, but it can also be a stressful and overwhelming experience. With so much to do, from packing up your belongings to arranging transportation and unloading at your new location, it's no wonder that many people find the moving process to be challenging. Fortunately, there are <strong>professional packers and movers in Chandigarh</strong> that can make the process much easier.</p>

        <div className="mp-quote-box bg-light p-5 rounded-4 mb-5 border-start border-red border-5">
          <p className="h5 fw-black text-navy mb-0 italic">In this blog, we will introduce you to one of the packers and movers in Chandigarh, Mountain Packers & Movers, and explain why they are a top choice for your next move.</p>
        </div>

        <h2 className="display-6 fw-black text-navy uppercase mb-4 mt-5">Who are Mountain Packers and Movers?</h2>
        <p className="mb-5">Mountain Packers and Movers is a professional moving company based in Chandigarh. They have been providing moving services to customers throughout the region for many years, and they have established a reputation for excellence and reliability. They offer a wide range of moving services, including residential moving, commercial moving, and vehicle transportation.</p>

        <h2 className="display-6 fw-black text-navy uppercase mb-4 mt-5">Why Choose Mountain Packers and Movers?</h2>

        <div className="mp-blog-list d-flex flex-column gap-5 mt-4">
          <div className="mp-blog-list-item">
            <h5 className="h4 fw-black text-red uppercase mb-3">1. Experienced and Professional Team</h5>
            <p>Mountain Packers and Movers have a team of experienced and highly trained professionals who are committed to providing top-quality moving services to their clients. They have years of experience in the industry and can handle any moving situation with ease and efficiency.</p>
          </div>

          <div className="mp-blog-list-item">
            <h5 className="h4 fw-black text-red uppercase mb-3">2. Comprehensive Moving Services</h5>
            <p>Mountain Packers and Movers offers a wide range of moving services to meet the needs of their customers. They can help you with everything from packing up your belongings to arranging transportation and unloading at your new location.</p>
          </div>

          <div className="mp-blog-list-item">
            <h5 className="h4 fw-black text-red uppercase mb-3">3. Competitive Pricing</h5>
            <p>Mountain Packers and Movers understand that moving can be expensive, which is why they offer competitive pricing for their services. They are transparent about their pricing, and there are no hidden fees or charges.</p>
          </div>

          <div className="mp-blog-list-item">
            <h5 className="h4 fw-black text-red uppercase mb-3">4. Quality Customer Service</h5>
            <p>Mountain Packers and Movers is committed to providing top-quality customer service to their clients. They are available to answer any questions or concerns you may have throughout the moving process, and they will work with you to ensure that your move is as stress-free as possible.</p>
          </div>

          <div className="mp-blog-list-item">
            <h5 className="h4 fw-black text-red uppercase mb-3">5. Reliable and On-Time</h5>
            <p>Mountain Packers and Movers understands the importance of punctuality and reliability when it comes to moving. They will arrive on time and complete your move within the agreed timeframe, ensuring that your schedule is not disrupted.</p>
          </div>
        </div>

        <h2 className="display-6 fw-black text-navy uppercase mb-4 mt-5 pt-4 border-top">Conclusion</h2>
        <p className="mb-0">Moving can be a stressful and challenging experience, but with the help of a professional moving company like Mountain Packers & Movers, it can be much easier. With their experienced professional packers and movers team, comprehensive moving services, competitive pricing, quality customer service, and reliability, they are a top choice for anyone planning a move to Chandigarh. Contact them today to schedule your move and experience the peace of mind that comes with working with a top-quality moving company.</p>
      </>
    )
  },
  'top-5-packers-and-movers-in-chandigarh': {
    title: 'Top 5 Packers And Movers In Chandigarh',
    eyebrow: 'Relocation Guide',
    date: 'April 28, 2026',
    category: 'Guides',
    image: '/img/blog/Top-5-Packers-and-Movers-in-Chandigarh.png',
    description: "If you're planning a move and looking for reliable, trustworthy packers and movers. In this blog, We'll introduce the top 5 packers and movers in Chandigarh.",
    keywords: "Top 5 packers and movers in Chandigarh, packers and movers company, professional packers and movers, packers and movers, Top 5 packers and movers",
    canonical: 'https://www.mountainpackersmovers.in/top-5-packers-and-movers-in-chandigarh.html',
    content: (
      <>
        <p className="lead fw-bold text-navy mb-5">Moving to a new place can be an exciting adventure, but the process of packing and moving all your belongings can be overwhelming. That's where professional packers and movers come in, making the transition to your new home much smoother. If you're planning a move and looking for reliable and trustworthy packers and movers.</p>

        <h2 className="display-6 fw-black text-navy uppercase mb-5">In this blog, we'll introduce you to the top 5 packers and movers in Chandigarh</h2>

        <div className="mp-blog-list d-flex flex-column gap-5">
          <div className="mp-blog-list-item p-5 bg-light rounded-5 border border-white shadow-sm">
            <h5 className="h4 fw-black text-red uppercase mb-3">1. Aggarwal Packers and Movers</h5>
            <p className="mb-0">Aggarwal Packers and Movers is one of the most well-known packers and movers in Chandigarh. They have been providing moving services for over 30 years and have a reputation for excellent service. They offer a variety of moving services, including residential and commercial moving, vehicle transportation, and storage solutions.</p>
          </div>

          <div className="mp-blog-list-item p-5 bg-light rounded-5 border border-white shadow-sm">
            <h5 className="h4 fw-black text-red uppercase mb-3">2. Allied Movers and Packers</h5>
            <p className="mb-0">Allied Movers and Packers is a reliable packers and movers company that provides a range of moving services in Chandigarh. They have a team of experienced professionals who are committed to providing quality service to their clients. They offer residential and commercial moving, vehicle transportation, and storage solutions.</p>
          </div>

          <div className="mp-blog-list-item p-5 bg-navy text-white rounded-5 shadow-lg scale-105 position-relative z-1">
            <div className="position-absolute top-0 end-0 p-4 opacity-20"><i className="fa fa-star h1"></i></div>
            <h5 className="h4 fw-black text-amber uppercase mb-3">3. Mountain Packers and Movers</h5>
            <p className="mb-0 text-white-80">Mountain Packers and Movers is a leading packers and movers company in Chandigarh. They offer a wide range of moving services, including residential and commercial moving, vehicle transportation, and storage solutions. They have a team of highly trained professionals who are committed to providing top-notch service to their clients.</p>
          </div>

          <div className="mp-blog-list-item p-5 bg-light rounded-5 border border-white shadow-sm">
            <h5 className="h4 fw-black text-red uppercase mb-3">4. Gati Packers and Movers</h5>
            <p className="mb-0">Gati Packers and Movers is a well-established packers and movers company in Chandigarh. They offer a variety of moving services, including residential and commercial moving, vehicle transportation, and storage solutions. They have a team of trained professionals who are dedicated to providing quality service to their clients.</p>
          </div>

          <div className="mp-blog-list-item p-5 bg-light rounded-5 border border-white shadow-sm">
            <h5 className="h4 fw-black text-red uppercase mb-3">5. Leo Packers and Movers</h5>
            <p className="mb-0">Leo Packers and Movers is a reliable packers and movers company in Chandigarh. They have a team of experienced professionals who are committed to providing excellent service to their clients. They offer residential and commercial moving, vehicle transportation, and storage solutions.</p>
          </div>
        </div>

        <h2 className="display-6 fw-black text-navy uppercase mb-4 mt-5 pt-4 border-top">Conclusion</h2>
        <p className="mb-0">Moving can be a stressful and overwhelming experience, but with the help of a professional packers and movers company, it can be much easier. If you're planning a move, the top 5 packers and movers listed above are excellent choices. Contact them today to schedule your move and experience the peace of mind that comes with working with a reliable and trustworthy packers and movers company.</p>
      </>
    )
  }
};

export async function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogData[slug];
  if (!blog) return {};

  return {
    title: blog.title,
    description: blog.description,
    keywords: blog.keywords,
    alternates: {
      canonical: blog.canonical,
    },
    openGraph: {
      type: 'article',
      title: blog.title,
      description: blog.description,
      images: [blog.image],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = blogData[slug];

  if (!blog) {
    notFound();
  }

  const latestPosts = Object.keys(blogData)
    .filter(s => s !== slug)
    .map(s => ({ slug: s, ...blogData[s] }));


  return (
    <main>
      <TopBar />
      <Header />

      <InnerHero
        title={blog.title}

        eyebrow="Relocation Insights"
        bgImage={blog.image}
        smallTitle={true}
      />

      <section className="mp-blog-detail py-10 bg-white">
        <div className="container">
          <div className="row g-5">
            {/* Article Content */}
            <div className="col-lg-8">
              <div className="mp-article-header mb-5">
                <nav aria-label="breadcrumb" className="mb-4">
                  <ol className="breadcrumb small fw-bold uppercase tracking-widest">
                    <li className="breadcrumb-item"><Link href="/" className="text-muted text-decoration-none">Home</Link></li>
                    <li className="breadcrumb-item"><Link href="/blog" className="text-muted text-decoration-none">Blog</Link></li>
                    <li className="breadcrumb-item active text-red" aria-current="page">Post Detail</li>
                  </ol>
                </nav>
                <h1 className="display-4 fw-black text-navy uppercase tracking-tight leading-tight mb-4">{blog.title}</h1>
                <div className="d-flex align-items-center gap-4 py-4 border-top border-bottom border-light">
                  <div className="d-flex align-items-center gap-2">
                    <i className="fa fa-calendar text-red"></i>
                    <span className="small fw-bold text-muted uppercase">{blog.date}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <i className="fa fa-folder-open text-red"></i>
                    <span className="small fw-bold text-muted uppercase">{blog.category}</span>
                  </div>
                </div>
              </div>

              <div className="mp-blog-featured-img rounded-5 overflow-hidden shadow-2xl mb-5" style={{ height: '500px' }}>
                <img src={blog.image} alt={blog.title} className="w-100 h-100 object-fit-cover" />
              </div>

              <div className="mp-article-body rich-text h5 fw-normal leading-relaxed text-muted">
                {blog.content}
              </div>

              <div className="mp-article-share mt-10 p-5 bg-light rounded-5 d-flex align-items-center justify-content-between flex-wrap gap-4">
                <h5 className="mb-0 fw-black text-navy uppercase tracking-widest h6">Spread The Knowledge</h5>
                <div className="d-flex gap-3">
                  {['facebook', 'twitter', 'linkedin', 'whatsapp'].map(social => (
                    <a key={social} href="#" className="mp-social-icon-btn shadow-sm bg-white rounded-circle d-flex align-items-center justify-content-center text-navy" style={{ width: '45px', height: '45px' }}>
                      <i className={`fa fa-${social}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <aside className="mp-blog-sidebar d-flex flex-column gap-5">
                {/* Search Widget */}
                <div className="mp-glass-card p-5 rounded-5 border-0 shadow-lg bg-navy text-white">
                  <h4 className="h5 fw-black uppercase tracking-1 mb-4">Search Insight</h4>
                  <div className="position-relative">
                    <input type="text" className="form-control mp-form-control bg-white-10 border-white-20 text-white placeholder-white-50" placeholder="Keywords..." />
                    <button className="position-absolute end-0 top-50 translate-middle-y border-0 bg-transparent text-white p-3">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>

                {/* Latest Posts */}
                <div className="mp-glass-card p-5 rounded-5 border-0 shadow-lg bg-white border border-light">
                  <h4 className="h5 fw-black text-navy uppercase tracking-1 mb-4 pb-3 border-bottom">Latest Stories</h4>
                  <div className="d-flex flex-column gap-4">
                    {latestPosts.map((post, i) => (
                      <Link key={i} href={`/blog/${post.slug}`} className="text-decoration-none group">
                        <div className="d-flex gap-3 align-items-start">
                          <img src={post.image} alt={post.title} className="rounded-3 shadow-sm object-fit-cover" style={{ width: '80px', height: '80px' }} />
                          <div>
                            <span className="d-block text-red fw-bold uppercase" style={{ fontSize: '10px', letterSpacing: '1px' }}>{post.date}</span>
                            <h6 className="text-navy fw-black uppercase mb-0 mt-1 transition-all group-hover:text-red" style={{ fontSize: '13px' }}>{post.title}</h6>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Tags Widget */}
                <div className="mp-glass-card p-5 rounded-5 border-0 shadow-lg bg-white border border-light">
                  <h4 className="h5 fw-black text-navy uppercase tracking-1 mb-4 pb-3 border-bottom">Popular Tags</h4>
                  <div className="d-flex flex-wrap gap-2">
                    {blog.keywords.split(',').map((tag, i) => (
                      <span key={i} className="badge bg-light text-navy fw-bold px-3 py-2 rounded-pill shadow-sm transition-all hover:bg-red hover:text-white cursor-pointer small">
                        #{tag.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
