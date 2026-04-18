# lumic

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-fjqwapcx)

## Contact Form Setup with SheetDB

The contact form is configured to send submissions to Google Sheets via SheetDB.

### Setup Instructions:

1. **Create a Google Sheet** with the following columns:
   - name
   - email
   - phone
   - project_type
   - project_idea
   - timestamp

2. **Connect to SheetDB**:
   - Go to [sheetdb.io](https://sheetdb.io/)
   - Sign up/Sign in
   - Connect your Google Sheet
   - Copy your API URL (it will look like: `https://sheetdb.io/api/v1/abc123def456`)

3. **Update the API URL**:
   - ✅ **DONE**: API URL is already configured as `https://sheetdb.io/api/v1/chjse7zd9vgw3`
   - If you need to change it, update the URL in `app/contact/page.tsx`

4. **Test the form**:
   - Submit a test form on the contact page
   - Check your Google Sheet to verify data is being added

### Form Data Structure:
The form sends the following data to your Google Sheet:
- `name`: Full name
- `email`: Email address
- `phone`: Phone number
- `project_type`: Selected project type
- `project_idea`: Project description
- `timestamp`: Submission timestamp
