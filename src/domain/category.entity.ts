
export type CategoryConstructorProps = {
    category_id?: string;
    name: string;
    description?: string | null;
    is_active?: boolean;
    created_at: Date;
}

export class Category {
    category_id: string;
    name: string;
    description: string | null;
    is_active: boolean;
    created_at: Date;

    constructor(props: CategoryConstructorProps) {
        this.category_id = props.category_id;
        this.name = props.name;
        this.description = props.description ?? null;
        this.is_active = props.is_active ?? true;
        this.created_at = props.created_at ?? new Date();
    }

    static create(props: CategoryConstructorProps): Category {
        return new Category(props);
    }

    changeName(name: string): void {
        this.name = name;
    }

    changeDescription(description: string | null): void {
        this.description = description;
    }

    deactivate(): void {
        this.is_active = false;
    }

    activate(): void {
        this.is_active = true;
    }

    toJSON() {
        return {
            category_id: this.category_id,
            name: this.name,
            description: this.description,
            is_active: this.is_active,
            created_at: this.created_at,
        };
    }
}