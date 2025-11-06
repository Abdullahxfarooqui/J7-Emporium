'use client';

import { useEffect } from 'react';

/**
 * Careers Page - Redirect to ERP Jobs Portal
 * 
 * This page automatically redirects users to the J7 Emporium careers portal
 * hosted on the ERP system where they can view and apply for open positions.
 */
export default function CareersPage() {
  useEffect(() => {
    // Immediate redirect to ERP jobs portal
    window.location.href = 'http://115.167.72.44:8002/jobs/j7_emporium/designer';
  }, []);

  // Return null since redirect is immediate
  return null;
}
