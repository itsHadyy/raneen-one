import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Features() {
  const { t } = useTranslation();
  const features = [
    {
      title: t('moreFeatures.decisioning'),
      image: '/media/assets/features/decisioning.webp',
      link: '/features/decisioning',
    },
    {
      title: t('moreFeatures.reporting'),
      image: '/media/assets/features/reporting.webp',
      link: '/features/reporting',
    },
    {
      title: t('moreFeatures.targeting'),
      image: '/media/assets/features/targeting.webp',
      link: '/features/targeting',
    },
    {
      title: t('moreFeatures.campaignManagement'),
      image: '/media/assets/features/campaignManagement.webp',
      link: '/features/campaign-management',
    },
    {
      title: t('moreFeatures.adminUI'),
      image: '/media/assets/features/admin.webp',
      link: '/features/admin-ui',
    },
    {
      title: t('moreFeatures.catalog'),
      image: '/media/assets/features/catalog.avif',
      link: '/features/catalog',
    },
  ];

    return (
    <div className='more-feaatures-container'>
      <div className="feature-highlight-label">{t('moreFeatures.explore')}</div>
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