import type { Colors } from '$lib/constants/colorscheme';

export interface SvgProps {
	fill?: string | typeof Colors;
	width?: string | number;
	height?: string | number;
}
