# Payments MVP Decision (Truthful + Inclusive)

## Goal
Accept payments cleanly for:
- subscriptions (tiers)
- one-off payments
without over-promising on rails we cannot fully support yet.

## Rails vs Ledger
- Rails = how money moves (Stripe, PayPal, bank transfer, crypto)
- Ledger = what we track/owe/guarantee (entitlements, circles credits, approvals, audits)

## MVP Rails (Phase 1)
Primary: Stripe (subscriptions + cards)
Secondary: PayPal (one-offs; subscriptions only if needed later)

## Phase 2
- Bank transfer (SEPA/manual invoicing + reconciliation)

## Phase 3
- Crypto payments (separate integration)
- Service/barter tracked as ledger credits, not fiat

## “Guaranteed exposure” policy link
See docs/tier-policy.md
