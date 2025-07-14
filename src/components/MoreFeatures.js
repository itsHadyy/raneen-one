import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Decisioning',
    image: '/media/assets/features/decisioning.webp',
    link: '/features/decisioning',
  },
  {
    title: 'Reporting',
    image: '/media/assets/features/reporting.webp',
    link: '/features/reporting',
  },
  {
    title: 'Targeting',
    image: '/media/assets/features/targeting.webp',
    link: '/features/targeting',
  },
  {
    title: 'Campaign Management',
    image: '/media/assets/features/campaignManagement.webp',
    link: '/features/campaign-management',
  },
  {
    title: 'Admin UI',
    image: '/media/assets/features/admin.webp',
    link: '/features/admin-ui',
  },
  {
    title: 'Catalog',
    image: '/media/assets/features/catalog.avif',
    link: '/features/catalog',
  },
];

function Features() {
  return (
    <div className='more-feaatures-container'>
      <div className="feature-highlight-label">EXPLORE MORE FEATURES</div>
      <div className="more-features-list">
        {features.map((feature, idx) => (
          <Link to={feature.link} className="more-feature-card" key={idx}>
            <div className="more-feature-image-wrapper">
              <img src={feature.image} alt={feature.title} className="more-feature-image" />
            </div>
            <div className="more-feature-title">{feature.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Features;