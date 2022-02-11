import { animate, animateChild, group, query, stagger, style, transition, trigger } from "@angular/animations";

export const routeTransitionAnimations = trigger('triggerName', [
	transition('One => Two, Two => Three, One => Three', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				right: 0,
				width: '100%'
			})
		]),
		query(':enter', [style({ right: '-100%', opacity: 0 })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('1s cubic-bezier(0.51, 0.92, 0.24, 1.15)', style({ right: '100%', opacity: 0 }))]),
			query(':enter', [animate('1s cubic-bezier(0.51, 0.92, 0.24, 1.15)', style({ right: '0%', opacity: 1 }))])
		]),
		query(':enter', animateChild())
	]),
	transition('Three => Two, Two => One, Three => One', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%'
			}),
		]),
		query(':enter', [style({ left: '-100%', opacity: 0 })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('1s cubic-bezier(0.51, 0.92, 0.24, 1.15)', style({ left: '100%', opacity: 0 }))]),
			query(':enter', [animate('1s cubic-bezier(0.51, 0.92, 0.24, 1.15)', style({ left: '0%', opacity: 1 }))])
		]),
		query(':enter', animateChild())
	])
]);

export const fadeAnimation = trigger('fadeAnimation', [
	transition(':enter', [
		style({ opacity: 0 }), animate('900ms', style({ opacity: 1 }))]
	),
	transition(':leave',
		[style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]
	)
]);

export const listAnimation = trigger('listAnimation', [
	transition('* <=> *', [
		query(':enter',
			[style({ opacity: 0 }), stagger('600ms', animate('600ms ease-out', style({ opacity: 1 })))],
			{ optional: true }
		),
		query(':leave',
			animate('200ms', style({ opacity: 0 })),
			{ optional: true }
		)
	])
]);