interface Thumbnail {
    analytics?: Analytics;
    analytics_response_payload?: string;
    bitly_gif_url?: string;
    bitly_url?: string;
    content_url?: string;
    embed_url?: string;
    id?: string;
    images: ImageInterface[];
    import_datetime?: string;
    is_sticker?: number;
    rating?: string;
    slug?: string;
    source?: string;
    source_post_url?: string;
    source_tld?: string;
    title?: string;
    trending_datetime?: string;
    type?: string;
    url?: string;
    user?: User;
    username?: string;
}

interface User {
    avatar_url: string;
    banner_image: string;
    banner_url: string;
    description: string;
    display_name: string;
    instagram_url: string;
    is_verified: boolean;
    profile_url: string;
    username: string;
    website_url: string;
}

interface Analytics {
    onclick: URL;
    onload: URL;
    onsent: URL;
}

interface URL {
    url: string;
}

export interface ImageInterface {
    '480w_still'?: ImageProperties;
    downsized?: ImageProperties;
    downsized_large?: ImageProperties;
    downsized_medium?: ImageProperties;
    downsized_small?: VideoProperties;
    downsized_still?: ImageProperties;
    fixed_height?: ImageProperties;
    fixed_height_downsampled?: ImageProperties;
    fixed_height_small?: ImageProperties;
    fixed_height_small_still?: ImageProperties;
    fixed_height_still?: ImageProperties;
    fixed_width?: ImageProperties;
    fixed_width_downsampled?: ImageProperties;
    fixed_width_small?: ImageProperties;
    fixed_width_small_still?: ImageProperties;
    fixed_width_still?: ImageProperties;
    looping?: VideoProperties;
    original?: ImageProperties;
    original_mp4?: VideoProperties;
    original_still?: ImageProperties;
    preview?: VideoProperties;
    hd?: ImageProperties;
    preview_gif?: ImageProperties;
    preview_webp?: ImageProperties;
}

interface VideoProperties {
    height: string;
    mp4: string;
    mp4_size: string;
    width: string;
}

interface ImageProperties {
    height: string;
    mp4: string;
    size: string;
    url: string;
    width: string;
}

interface Meta {
    msg: string;
    response_id: string;
    status: number;
}

interface Pagination {
    count: number;
    offset: number;
    total_count: number;
}

export interface ThumbnailsProps {
    data: Array<Thumbnail>;
    meta?: Meta;
    pagination?: Pagination;
}