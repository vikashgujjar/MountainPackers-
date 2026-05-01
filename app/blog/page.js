import React from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import InnerHero from '@/components/InnerHero';
import Link from 'next/link';

export const metadata = {
  title: 'Mountain Packers and Movers - Blog',
  description: 'Check out our latest blog related to packers and movers services.',
  keywords: 'latest blogs, packers and movers blogs',
  alternates: {
    canonical: 'https://www.mountainpackersmovers.in/blog.html',
  },
  openGraph: {
    type: 'website',
    title: 'Mountain Packers and Movers - Our Blog',
    description: 'Check out our latest blog related to packers and movers services.',
    url: 'https://www.mountainpackersmovers.in/blog.html',
    siteName: 'Mountain Packers and Movers',
  },
};

const blogs = [
  {
    slug: 'professional-packers-and-movers-in-chandigarh',
    title: 'Professional Packers And Movers In Chandigarh',
    excerpt: 'Moving to a new home or office can be an exciting time, but it can also be a stressful and overwhelming experience...',
    image: '/img/blog/ProfessionalPackersandMoversinChandigarh.png',
    date: 'May 01, 2026',
    category: 'Expert Tips'
  },
  {
    slug: 'top-5-packers-and-movers-in-chandigarh',
    title: 'Top 5 Packers And Movers In Chandigarh',
    excerpt: 'Moving to a new place can be an exciting adventure, but the process of packing and moving all your belongings can be overwhelming...',
    image: '/img/blog/Top-5-Packers-and-Movers-in-Chandigarh.png',
    date: 'April 28, 2026',
    category: 'Guides'
  }
];

export default function BlogListingPage() {
  return (
    <main>
      <TopBar />
      <Header />

      <InnerHero 
        title="Our" 
        subtitle="Insights." 
        eyebrow="Latest Blogs" 
        bgImage="/img/banner2.jpg" 
      />

      <section className="mp-blog-listing py-10 bg-white position-relative">
        <div className="container">
          <div className="text-center mb-5 pb-5 sr vis d1">
            <div className="mp-eyebrow justify-content-center mp-letter-spacing-wide">Industry Knowledge</div>
            <h2 className="mp-stitle display-3 fw-black text-navy uppercase">The <span className="text-red">Move Journal.</span></h2>
            <p className="text-muted mt-3 h5 fw-normal max-w-600 mx-auto">Expert advice, relocation guides, and the latest trends from the heart of the moving industry.</p>
          </div>

          <div className="row g-5">
            {blogs.map((blog, i) => (
              <div key={i} className="col-lg-6 sr vis" style={{ transitionDelay: `${0.1 * i}s` }}>
                <Link href={`/blog/${blog.slug}`} className="text-decoration-none group">
                  <div className="mp-blog-card-premium overflow-hidden rounded-5 shadow-lg bg-white border border-light h-100 transition-all hover:shadow-2xl">
                    <div className="position-relative overflow-hidden" style={{ height: '350px' }}>
                      <img src={blog.image} alt={blog.title} className="w-100 h-100 object-fit-cover transition-all group-hover:scale-110" />
                      <div className="position-absolute top-0 start-0 p-4">
                        <span className="badge bg-red px-3 py-2 rounded-pill shadow-sm">{blog.category}</span>
                      </div>
                      <div className="position-absolute inset-0 bg-gradient-to-t from-navy opacity-60"></div>
                    </div>
                    
                    <div className="p-5">
                      <div className="d-flex align-items-center gap-3 mb-4">
                        <span className="small fw-bold text-red text-uppercase tracking-widest">{blog.date}</span>
                        <span className="text-muted opacity-30">|</span>
                        <span className="small fw-bold text-navy opacity-60">5 Min Read</span>
                      </div>
                      <h3 className="h2 fw-black text-navy text-uppercase tracking-tight mb-4 transition-all group-hover:text-red">{blog.title}</h3>
                      <p className="text-muted mb-5 leading-relaxed">{blog.excerpt}</p>
                      
                      <div className="d-inline-flex align-items-center gap-2 fw-black text-red text-uppercase tracking-widest small">
                        Read Story <i className="fa fa-arrow-right transition-all group-hover:translate-x-2"></i>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
