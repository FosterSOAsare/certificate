import * as React from 'react'
import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { ForwardedRef, forwardRef } from 'react'
import Loader from './Loader'

type ImageProps = NextImageProps & { className?: string; alt?: string }

// eslint-disable-next-line react/display-name
const Image = forwardRef(
  (
    { className = '', alt = '', src, ...otherProps }: ImageProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    const FALLBACK_IMAGE_URL =
      'https://firebasestorage.googleapis.com/v0/b/readnews-d8d86.appspot.com/o/mqdefault_6s.png?alt=media&token=6e5541ef-6fe6-4ea3-ad42-9727ccb016af'
    const [loaded, setLoaded] = React.useState<boolean>(false)

    return (
      <div
        className={`${!loaded && 'bg-gray-300'} ${className}`}
        style={{ position: 'relative' }}
        ref={ref}
      >
        {!loaded ? (
          <>
            <Loader
              mainColor="red"
              className="w-16 h-16 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </>
        ) : // <svg
        //   className="w-1/4 h-1/4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        //   version="1.1"
        //   xmlns="http://www.w3.org/2000/svg"
        //   viewBox="0 0 350 350"
        //   xmlnsXlink="http://www.w3.org/1999/xlink"
        //   enableBackground="new 0 0 350 350"
        // >
        //   <path
        //     fill="white"
        //     d="M5,350h340V0H5V350z M25,330v-62.212h300V330H25z M179.509,247.494H60.491L120,171.253L179.509,247.494z   M176.443,211.061l33.683-32.323l74.654,69.05h-79.67L176.443,211.061z M325,96.574c-6.384,2.269-13.085,3.426-20,3.426  c-33.084,0-60-26.916-60-60c0-6.911,1.156-13.612,3.422-20H325V96.574z M25,20h202.516C225.845,26.479,225,33.166,225,40  c0,44.112,35.888,80,80,80c6.837,0,13.523-0.846,20-2.518v130.306h-10.767l-104.359-96.526l-45.801,43.951L120,138.748  l-85.109,109.04H25V20z"
        //   />
        // </svg>
        null}

        <NextImage
          onLoadingComplete={() => setLoaded(true)}
          {...otherProps}
          alt={alt}
          src={
            String(src).startsWith('/') ||
            String(src).startsWith('http') ||
            String(src).startsWith('blob')
              ? src
              : FALLBACK_IMAGE_URL
          }
          layout={otherProps.layout || 'fill'}
        />
      </div>
    )
  },
)

export default Image
