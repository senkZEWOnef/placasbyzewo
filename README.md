# PlacasPR - Solar Panel Review Site for Puerto Rico

A complete solar panel review and lead generation website built with Next.js, tailored specifically for the Puerto Rico market.

## 🌞 Features

### For Visitors
- **Comprehensive Solar Panel Reviews**: Detailed comparisons of top solar panels available in Puerto Rico
- **Battery Comparisons**: Tesla Powerwall vs Generac PWRcell and other energy storage solutions
- **Free Consultation Booking**: Lead capture form for connecting with local certified installers
- **Educational Content**: Articles about solar incentives, costs, and hurricane preparation
- **Puerto Rico Focused**: Content specifically tailored for tropical climate and local regulations

### For Monetization
- **Affiliate Integration**: Amazon Associates and Home Depot affiliate links with tracking
- **Lead Generation**: Consultation forms that connect users with partner installers
- **Analytics Tracking**: Google Analytics and conversion tracking setup
- **SEO Optimized**: Structured data, meta tags, and content optimized for search engines

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Forms**: React Hook Form
- **Analytics**: Google Analytics 4 integration
- **Deployment Ready**: Optimized for Vercel deployment

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with analytics
│   ├── page.tsx                # Homepage with hero and lead capture
│   ├── consultation/
│   │   └── page.tsx            # Lead capture form
│   ├── articles/
│   │   ├── page.tsx            # Article listing page
│   │   ├── mejores-placas-solares-2025/
│   │   │   └── page.tsx        # Solar panel comparison article
│   │   └── tesla-vs-generac/
│   │       └── page.tsx        # Battery comparison article
│   └── api/
│       ├── consultation/
│       │   └── route.ts        # Lead processing endpoint
│       └── track-affiliate/
│           └── route.ts        # Affiliate click tracking
└── components/
    └── AffiliateLink.tsx       # Affiliate link component with tracking
```

## 🛠️ Setup Instructions

1. **Clone and Install**
   ```bash
   npm install
   ```

2. **Configure Analytics**
   - Replace `GA_MEASUREMENT_ID` in `layout.tsx` with your Google Analytics ID
   - Update Google verification code
   - Set up Facebook Pixel if needed

3. **Set Up Affiliate Programs**
   - Apply for Amazon Associates program
   - Apply for Home Depot affiliate program
   - Update tracking IDs in `AffiliateLink.tsx`

4. **Configure Lead Processing**
   - Set up email service (SendGrid, Mailgun, etc.)
   - Configure database or CRM integration in `/api/consultation/route.ts`
   - Update partner installer contact information

5. **Run Development Server**
   ```bash
   npm run dev
   ```

## 💰 Monetization Strategy

### Affiliate Revenue
- **Amazon Associates**: 3-8% commission on solar equipment
- **Home Depot**: 2-8% commission on solar products
- **Direct Manufacturer Programs**: Renogy, EcoFlow, etc. (5-10%)

### Lead Generation
- **Consultation Forms**: $50-100 per qualified lead
- **Revenue Share**: 5-10% of closed solar installations
- **Partner Referrals**: Monthly retainer + per-lead bonus

### Traffic Growth Plan
1. **Month 1-3**: Publish 15-20 high-quality articles
2. **Month 4-6**: SEO optimization, reach 1K-3K monthly visitors
3. **Month 6-12**: Scale content, add videos, target 10K+ visitors

## 📈 Expected Performance

**Conservative Estimates (Month 6+)**:
- 5,000 monthly visitors
- 1% affiliate conversion rate = 50 sales/month
- Average $20 commission = $1,000/month from affiliates
- 2% lead conversion = 100 leads/month
- 20% close rate = 20 installations
- $250 per installation = $5,000/month from leads

**Total Monthly Revenue Potential**: $6,000+

## 🎯 Key Features for Puerto Rico Market

### Content Localization
- Spanish language interface
- PR-specific municipalities in forms
- Local electricity rates and incentives
- Hurricane preparation content
- Tropical climate considerations

### Product Focus
- Panels tested for high humidity and salt air
- Battery systems for hurricane backup
- Local installer network
- Puerto Rico electrical code compliance

## 🔧 Next Steps to Launch

### Immediate (Week 1-2)
1. **Set up affiliate accounts**:
   - Amazon Associates application
   - Home Depot affiliate program
   - Update tracking IDs in code

2. **Configure analytics**:
   - Create Google Analytics 4 property
   - Replace `GA_MEASUREMENT_ID` in layout.tsx
   - Set up conversion goals

3. **Partner with local installer**:
   - Contact your friend's solar company
   - Set up lead handoff process
   - Agree on commission structure

### Short-term (Month 1)
1. **Content creation**:
   - Write 5-10 more articles
   - Add solar calculator tool
   - Create email newsletter signup

2. **SEO optimization**:
   - Submit sitemap to Google
   - Optimize for local PR keywords
   - Build backlinks from PR websites

3. **Lead processing**:
   - Set up email automation
   - Configure CRM integration
   - Test form submission flow

### Long-term (Month 2-6)
1. **Scale content**:
   - Weekly article publishing
   - Video reviews
   - Social media presence

2. **Expand partnerships**:
   - Multiple installer partners
   - Equipment supplier relationships
   - Local media appearances

## 📊 Analytics & Tracking

### Conversion Events
- **Consultation Submissions**: Tracked as $50 value
- **Affiliate Clicks**: Tracked by platform and product
- **Page Views**: Standard GA4 tracking
- **User Engagement**: Time on page, scroll depth

## 🚀 Deployment

### Vercel Deployment (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy with one click
4. Configure custom domain

### Environment Variables Needed
```
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
AMAZON_AFFILIATE_ID=placaspr-20
HOME_DEPOT_AFFILIATE_ID=placaspr
```

## 📞 Support & Contact

### For Users
- **Email**: info@placaspr.com
- **Phone**: (787) 123-4567
- **Free Consultations**: Available 7 days/week

---

Built with ❤️ for the Puerto Rico solar community. This site helps families save money and stay powered during hurricanes while building a sustainable affiliate and lead generation business.
