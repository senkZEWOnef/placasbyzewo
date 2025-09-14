'use client'

import { useState } from 'react'

interface AffiliateLinkProps {
  href: string
  children: React.ReactNode
  platform: 'amazon' | 'homedepot' | 'other'
  className?: string
  trackingId?: string
}

export default function AffiliateLink({ 
  href, 
  children, 
  platform, 
  className = '',
  trackingId 
}: AffiliateLinkProps) {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(true)
    
    // Track affiliate click for analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'affiliate_click', {
        platform: platform,
        href: href,
        tracking_id: trackingId
      })
    }

    // Track conversion for your own analytics
    fetch('/api/track-affiliate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        platform,
        url: href,
        trackingId,
        timestamp: new Date().toISOString()
      })
    }).catch(err => console.log('Analytics tracking failed:', err))
  }

  // Add affiliate tracking parameters to the URL
  const getAffiliateUrl = () => {
    const url = new URL(href)
    
    switch (platform) {
      case 'amazon':
        // Add Amazon Associates tracking
        url.searchParams.set('tag', trackingId || 'placaspr-20')
        url.searchParams.set('linkCode', 'ogi')
        url.searchParams.set('th', '1')
        break
      case 'homedepot':
        // Add Home Depot affiliate tracking
        url.searchParams.set('cm_mmc', `affiliate-_-${trackingId || 'placaspr'}-_-na-_-na`)
        break
      default:
        // Generic affiliate tracking
        if (trackingId) {
          url.searchParams.set('ref', trackingId)
        }
    }
    
    return url.toString()
  }

  return (
    <a
      href={getAffiliateUrl()}
      target="_blank"
      rel="nofollow noopener sponsored"
      className={`${className} ${isClicked ? 'opacity-75' : ''}`}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}

// Utility component for common affiliate buttons
export function AmazonButton({ 
  productUrl, 
  children = "Ver en Amazon",
  className = ""
}: {
  productUrl: string
  children?: React.ReactNode
  className?: string
}) {
  return (
    <AffiliateLink
      href={productUrl}
      platform="amazon"
      className={`bg-orange-500 text-white px-4 py-2 rounded-md font-medium hover:bg-orange-600 transition-colors inline-flex items-center ${className}`}
    >
      🛒 {children}
    </AffiliateLink>
  )
}

export function HomeDepotButton({ 
  productUrl, 
  children = "Ver en Home Depot",
  className = ""
}: {
  productUrl: string
  children?: React.ReactNode
  className?: string
}) {
  return (
    <AffiliateLink
      href={productUrl}
      platform="homedepot"
      className={`bg-orange-600 text-white px-4 py-2 rounded-md font-medium hover:bg-orange-700 transition-colors inline-flex items-center ${className}`}
    >
      🏠 {children}
    </AffiliateLink>
  )
}