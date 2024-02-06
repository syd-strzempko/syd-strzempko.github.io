export const PATHS = {
    HOME: () => '/',
    WORK: (id = undefined) => id ? `/work/${id}` : '/work',
    ART: (id = undefined) => id ? `/art/${id}` : '/art',
};