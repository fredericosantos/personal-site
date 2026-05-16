---
title: hosting_app
description: "Automates the back-office of running rental properties. Booking emails get parsed, contracts auto-generated, calendars synced — built on top of the Google spreadsheet + email ecosystem."
language: JavaScript
tags: [apps-script, google-workspace, automation]
private: true
order: 3
---

Running a couple of rental properties is mostly small repetitive admin, and the small repetitive admin loses real money when it's done wrong. Bookings arrive through different platforms — Airbnb, Uniplaces, Booking.com — each with its own email format that changes every few months. Each booking has to become a calendar event, a contract PDF, an email draft to the tenant, an income row in a spreadsheet, an entry in the contacts list. Get any of those wrong and either the guest has a bad experience or the accounting goes sideways.

This is a set of Google Apps Scripts that automates the whole chain. A booking email arrives → the parser identifies the platform (the dispatcher handles version drift — there's already a v2 parser for the newest Uniplaces format because they redesigned their emails this spring) → the system creates a calendar event, a contract PDF in Drive, an email draft to the tenant, and a row in the income spreadsheet. All of it without my involvement past the initial trigger.

I built it on Apps Script specifically because it sits *inside* Google's permission boundary. No separate server to maintain, no auth flows to wire up, no Sheets/Drive API tokens to rotate. The code reads and writes the spreadsheets and Drive folders the business already runs on, as the user who owns them. The trade-off — Apps Script's quotas and runtime limits — turned out to be the right kind of constraint: it forces the code to stay small, which is exactly what you want for something that runs every time an email arrives.
