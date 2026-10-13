# Native mobile account callback

The existing website sign-in accepts the fixed `penkra-mobile` client ID alongside `penkra-desktop`, preserves its PKCE query, and routes its return to `com.penkra.mobile://auth/callback#token=...`. Mobile requests cannot select desktop development flavors or numbered desktop instances. Existing desktop callback defaults remain unchanged; no client_platform parameter is introduced.

Both AuthScreen and EmailVerifiedScreen pass the requested client ID to callback routing. Existing website forms and email verification remain unchanged. The phone owns no email or verification-code UI.

Validation: all 28 website tests and typecheck passed, including mobile query preservation, callback encoding, unknown-client rejection and rejection of desktop overrides for mobile. No lint script is declared in this repository.

Branch: `mobile-client-auth`, based on `origin/main`. No push or deployment performed. The local Next server uses `NEXT_PUBLIC_PENKRA_AUTH_URL=http://127.0.0.1:3402/auth` on port 3400 to exercise the isolated backend review branch.
