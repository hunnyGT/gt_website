import Image from 'next/image';
import { SocialProofProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const SocialProof = ({ images, id, hasBackground = false }: SocialProofProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    <div className="flex items-center justify-center gap-6 md:gap-9">
      {images &&
        images.map(({ src, alt, link }, index) => (
          <div key={`item-social-proof-${index}`}>
            <a href={link} target="_blank" rel="noopener">
              <Image src={src} alt={alt} className="h-auto w-40 rounded-full m-10 hover:scale-105 bg-dark-200" object-fit="contain" width={64} height={64} />
            </a>
          </div>
        ))}
    </div>
  </WidgetWrapper>
);

export default SocialProof;
