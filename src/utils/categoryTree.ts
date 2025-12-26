import { Category } from "@/types/category";

/**
 * Convert flat category list into indented list (WordPress style)
 */
export function buildIndentedCategories(
    categories: Category[],
    parentId: string | null = null,
    depth = 0
): Category[] {
    let result: Category[] = [];

    const children = categories.filter(cat =>
        parentId === null
            ? !cat.parent
            : cat.parent?._id === parentId
    );

    for (const child of children) {
        // attach depth (UI use only)
        (child as any)._depth = depth;

        result.push(child);

        result = result.concat(
            buildIndentedCategories(categories, child._id, depth + 1)
        );
    }

    return result;
}
