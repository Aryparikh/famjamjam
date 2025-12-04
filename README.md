# 🎉 FamJamJam - Connect Families, Build Community

> A social platform helping families meet other families nearby through interest-based groups and local events.

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-Latest-green)](https://supabase.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

## 🚀 Quick Start (5 Minutes to Deploy)

### Prerequisites
- Node.js 18+ installed
- Supabase account (free at [supabase.com](https://supabase.com))
- Vercel account (free at [vercel.com](https://vercel.com))
- Your GoDaddy domain

### Step 1: Clone & Install
```bash
# Clone this repository
cd famjamjam-production

# Install dependencies
npm install
```

### Step 2: Set Up Supabase
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Wait for database to be ready (~2 minutes)
3. Go to SQL Editor in Supabase dashboard
4. Copy the entire contents of `supabase/schema.sql`
5. Paste and run in SQL Editor
6. Go to Settings → API
7. Copy your project URL and anon key

### Step 3: Configure Environment
```bash
# Create environment file
cp .env.example .env.local

# Edit .env.local and add your Supabase credentials:
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

### Step 4: Run Locally
```bash
npm run dev
```
Visit http://localhost:3000 🎉

### Step 5: Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts, add environment variables when asked
```

OR use Vercel Dashboard:
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your Git repository
3. Add environment variables in settings
4. Click "Deploy"

### Step 6: Connect Your GoDaddy Domain
1. In Vercel project settings, go to "Domains"
2. Add your domain (e.g., famjamjam.com)
3. Copy the DNS records shown
4. Go to GoDaddy DNS Management
5. Add the CNAME and A records
6. Wait 24-48 hours for DNS propagation
7. Your site is live! 🚀

---

## 📖 Full Documentation

See [PRODUCTION-DOCS.md](./PRODUCTION-DOCS.md) for:
- Complete architecture details
- Technology decisions and rationale
- Security implementation
- Scaling strategy
- Feature roadmap
- Business metrics
- And much more...

---

## 🎯 Features

### For Users
- ✅ Create family profiles
- ✅ Join interest-based groups
- ✅ Discover local events
- ✅ RSVP to meetups
- ✅ Write reviews & ratings
- ✅ Get verified badge
- ✅ Safe & moderated community

### For Group Admins
- ✅ Create and manage groups
- ✅ Approve/decline join requests
- ✅ Create group events
- ✅ Track attendance
- ✅ Manage members

### For Admins
- ✅ Verify users
- ✅ Moderate content
- ✅ Handle reports
- ✅ Analytics dashboard
- ✅ Manage community

---

## 🏗️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL (Supabase)
- **Auth**: Supabase Auth
- **Storage**: Supabase Storage
- **Hosting**: Vercel
- **Analytics**: Google Analytics
- **Monitoring**: Sentry

---

## 📁 Project Structure

```
famjamjam-production/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Auth pages (login, register)
│   ├── (site)/            # Public pages
│   ├── dashboard/         # User dashboard
│   ├── groups/            # Group pages
│   ├── events/            # Event pages
│   ├── admin/             # Admin panel
│   └── api/               # API routes
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── groups/           # Group-specific components
│   ├── events/           # Event-specific components
│   └── layout/           # Layout components
├── lib/                  # Utilities & helpers
│   ├── supabase.ts      # Supabase client
│   ├── utils.ts         # Utility functions
│   └── hooks.ts         # Custom React hooks
├── supabase/            # Database schema & migrations
│   └── schema.sql       # Complete database schema
├── public/              # Static assets
├── .env.example         # Environment variables template
└── README.md            # You are here!
```

---

## 🔐 Environment Variables

Required environment variables (add to `.env.local`):

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# App Configuration
NEXT_PUBLIC_APP_URL=https://famjamjam.com
NEXT_PUBLIC_APP_NAME=FamJamJam

# Admin
ADMIN_EMAIL=admin@famjamjam.com
```

---

## 🧪 Development

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

### Lint Code
```bash
npm run lint
```

### Type Check
```bash
npx tsc --noEmit
```

---

## 🗄️ Database Management

### Run Migrations
```bash
# Go to Supabase dashboard → SQL Editor
# Run the schema.sql file
```

### Backup Database
```bash
# Supabase provides automatic daily backups
# Manual backup: Dashboard → Database → Backups
```

### Reset Database
```bash
# WARNING: This deletes all data!
# Go to SQL Editor and run:
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
# Then run schema.sql again
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

#### Using Vercel Dashboard
1. Push code to GitHub
2. Import repository in Vercel
3. Add environment variables
4. Deploy automatically

#### Using CLI
```bash
vercel --prod
```

### Environment Variables in Vercel
Add these in Project Settings → Environment Variables:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

### Custom Domain Setup

1. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Add your domain (famjamjam.com)

2. **Update GoDaddy DNS**
   - Type: `CNAME`, Name: `www`, Value: `cname.vercel-dns.com`
   - Type: `A`, Name: `@`, Value: `76.76.21.21`

3. **Wait for Propagation**
   - Usually 2-24 hours
   - Check status: https://www.whatsmydns.net

4. **SSL Certificate**
   - Automatically issued by Vercel
   - HTTPS enabled by default

---

## 📊 Monitoring & Analytics

### Set Up Google Analytics
1. Create GA4 property
2. Add tracking ID to environment variables:
   ```bash
   NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
   ```

### Set Up Error Tracking (Sentry)
```bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
```

### Monitor Performance
- Vercel Analytics (built-in)
- Web Vitals dashboard
- Server logs in Vercel

---

## 🔒 Security Checklist

- [x] Environment variables secured
- [x] Database RLS enabled
- [x] Input validation (Zod)
- [x] XSS prevention
- [x] CSRF protection
- [x] SQL injection prevention
- [x] Rate limiting
- [x] HTTPS only
- [x] Secure authentication
- [x] Content moderation

---

## 🐛 Troubleshooting

### Database Connection Issues
```bash
# Check Supabase status
https://status.supabase.com

# Verify environment variables are set
echo $NEXT_PUBLIC_SUPABASE_URL
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Deployment Issues
```bash
# Check Vercel logs
vercel logs

# Verify environment variables in Vercel dashboard
```

---

## 📞 Support

- **Documentation**: [PRODUCTION-DOCS.md](./PRODUCTION-DOCS.md)
- **Issues**: Open an issue on GitHub
- **Email**: support@famjamjam.com
- **Community**: [Discord coming soon]

---

## 🤝 Contributing

We welcome contributions! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📜 License

MIT License - see [LICENSE](LICENSE) file for details

---

## 🙏 Acknowledgments

- Next.js team for an amazing framework
- Supabase for the backend infrastructure
- Vercel for seamless deployment
- The open-source community

---

## 🎯 Roadmap

### ✅ Phase 1: MVP (Current)
- User profiles & authentication
- Groups with approval workflow
- Events with RSVP
- Reviews & ratings
- Verification system
- Content moderation

### 🚧 Phase 2: Growth (Q1 2025)
- [ ] Direct messaging
- [ ] Email notifications
- [ ] Advanced search & filters
- [ ] Recommended groups
- [ ] Mobile app (React Native)

### 🔮 Phase 3: Scale (Q2 2025)
- [ ] Real-time chat
- [ ] Photo albums
- [ ] Premium features
- [ ] Business accounts
- [ ] Analytics for group admins

---

## 💰 Costs

### Free Tier (0-1,000 users)
- Vercel: Free
- Supabase: Free
- **Total: $0/month**

### Growth (1,000-10,000 users)
- Vercel: Free
- Supabase Pro: $25/month
- **Total: $25/month**

### Scale (10,000+ users)
- Vercel Pro: $20/month
- Supabase Team: $599/month
- **Total: $619/month**

---

## 📈 Success Metrics

- **Month 1**: 100 users, 10 groups
- **Month 3**: 500 users, 50 groups
- **Month 6**: 2,000 users, 200 groups
- **Year 1**: 10,000 users, 1,000 groups

---

**Built with ❤️ for families everywhere**

---

## 🚀 What's Next?

1. ✅ Complete local setup
2. ✅ Deploy to Vercel
3. ✅ Connect domain
4. 📝 Add content (groups, events)
5. 🎉 Launch and promote!

**Need help?** Check [PRODUCTION-DOCS.md](./PRODUCTION-DOCS.md) for detailed guides.

---

*Last updated: December 2024*
