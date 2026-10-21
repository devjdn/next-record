import { sequence, type Handle } from "@sveltejs/kit/hooks";
// import { building } from '$app/env';
// import { auth } from '#lib/server/auth.ts';
// import { svelteKitHandler } from 'better-auth/svelte-kit';
//
// const handleBetterAuth: Handle = async ({ event, resolve }) => {
// 	const session = await auth.api.getSession({ headers: event.request.headers });
//
// 	if (session) {
// 		event.locals.session = session.session;
// 		event.locals.user = session.user;
// 	}
//
// 	return svelteKitHandler({ event, resolve, auth, building });
// };
//
// export const handle: Handle = handleBetterAuth;

const handleFontPreloading: Handle = async ({ event, resolve }) => {
	return resolve(event, {
		preload: (asset) => {
			return asset.type === "font" && asset.filename.includes("InterVariable");
		},
	});
};

export const handle = sequence(handleFontPreloading);
