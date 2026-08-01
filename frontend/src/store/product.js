import { create } from "zustand";

const parseJsonSafely = async (response) => {
	const raw = await response.text();
	if (!raw) return null;

	try {
		return JSON.parse(raw);
	} catch {
		return null;
	}
};

export const useProductStore = create((set) => ({
	products: [],
	setProducts: (products) => set({ products }),
	createProduct: async (newProduct) => {
		if (!newProduct.name || !newProduct.image || !newProduct.price) {
			return { success: false, message: "Please fill in all fields." };
		}
		try {
			const res = await fetch("/api/products", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newProduct),
			});

			const data = await parseJsonSafely(res);
			if (!res.ok || !data?.success) {
				return {
					success: false,
					message: data?.message || `Request failed with status ${res.status}`,
				};
			}

			set((state) => ({ products: [...state.products, data.data] }));
			return { success: true, message: data.message || "Product created successfully" };
		} catch {
			return { success: false, message: "Unable to reach server. Please try again." };
		}
	},
	fetchProducts: async () => {
		try {
			const res = await fetch("/api/products");
			const data = await parseJsonSafely(res);
			if (!res.ok || !data?.success) {
				set({ products: [] });
				return;
			}
			set({ products: data.data || [] });
		} catch {
			set({ products: [] });
		}
	},
	deleteProduct: async (pid) => {
		try {
			const res = await fetch(`/api/products/${pid}`, {
				method: "DELETE",
			});
			const data = await parseJsonSafely(res);
			if (!res.ok || !data?.success) {
				return {
					success: false,
					message: data?.message || `Request failed with status ${res.status}`,
				};
			}

			// update the ui immediately, without needing a refresh
			set((state) => ({ products: state.products.filter((product) => product._id !== pid) }));
			return { success: true, message: data.message };
		} catch {
			return { success: false, message: "Unable to reach server. Please try again." };
		}
	},
	updateProduct: async (pid, updatedProduct) => {
		try {
			const res = await fetch(`/api/products/${pid}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updatedProduct),
			});
			const data = await parseJsonSafely(res);
			if (!res.ok || !data?.success) {
				return {
					success: false,
					message: data?.message || `Request failed with status ${res.status}`,
				};
			}

			// update the ui immediately, without needing a refresh
			set((state) => ({
				products: state.products.map((product) => (product._id === pid ? data.data : product)),
			}));

			return { success: true, message: data.message };
		} catch {
			return { success: false, message: "Unable to reach server. Please try again." };
		}
	},
}));
