import * as Equal from './equal';

export type Pack = {
    id: number;
    name: string;
    title: string;
    subtitle: string;
    description: string;
    modified: string;
    langs_ids: number[];
    state: Equal.ModelState;
};

export type Module = {
    id: number;
    identifier: number;
    order: number;
    title: string;
    link: string;
    page_count: number;
    chapter_count: number;
    description: string;
    duration: number;
    pack_id: number | Pack;
    modified: string;
    state: Equal.ModelState;
    chapters: Chapter[];
};

export type Chapter = {
    id: number;
    identifier: number;
    modified: string;
    order: number;
    title: string;
    state: Equal.ModelState;
    pages: Page[];
};

export type Page = {
    id: number;
    identifier: number;
    modified: string;
    next_active: string;
    order: number;
    leaves: Leaf[];
};

export type Leaf = {
    id: number;
    identifier: number;
    modified: string;
    background_image: null | string;
    background_opacity: number;
    background_stretch: boolean;
    contrast: string;
    oder: number;
    state: Equal.ModelState;
    visible: string;
    groups: Group[];
};

export type Group = {
    id: number;
    identifier: number;
    modified: string;
    order: number;
    state: Equal.ModelState;
    visible: string;
    direction: string;
    fixed: boolean;
    row_span: number;
    widgets: Widget[];
};

export type Widget = {
    id: number;
    identifier: number;
    modified: string;
    order: number;
    content: string;
    type: WidgetType;
    section_id: number | null;
    image_url: string | null;
    video_url: string | null;
    sound_url: string | null;
    has_separator_left: boolean;
    has_separator_right: boolean;
    align: string;
    on_click: string;
    state: Equal.ModelState;
};

export type WidgetType =
    | 'text'
    | 'code'
    | 'chapter_number'
    | 'chapter_title'
    | 'chapter_description'
    | 'page_title'
    | 'headline'
    | 'subtitle'
    | 'head_text'
    | 'tooltip'
    | 'sound'
    | 'video'
    | 'image_popup'
    | 'first_capital'
    | 'submit_button'
    | 'selector'
    | 'selector_wide'
    | 'selector_yes_no'
    | 'selector_choice'
    | 'selector_section'
    | 'selector_section_wide'
    | 'selector_popup';
