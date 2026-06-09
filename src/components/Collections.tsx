import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, query, addDoc, updateDoc, deleteDoc, doc, serverTimestamp, orderBy } from 'firebase/firestore';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { db, auth } from '../lib/firebase';
import { Plus, Edit2, Trash2, LogOut, Check, X, Image as ImageIcon, Upload } from 'lucide-react';
import { motion } from 'motion/react';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  createdAt: any;
  updatedAt: any;
}

export function Collections() {
  const [products, setProducts] = useState<Product[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [uploading, setUploading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '', price: 0, imageUrl: '', category: 'Shirts'
  });

  useEffect(() => {
    const q = query(collection(db, 'products'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const prods: Product[] = [];
      snapshot.forEach((doc) => {
        prods.push({ id: doc.id, ...doc.data() } as Product);
      });
      setProducts(prods);
    }, (error) => {
      console.error("Error fetching products", error);
    });

    const unsubAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
      unsubAuth();
    };
  }, []);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleLogout = () => signOut(auth);

  const startEdit = (product: Product) => {
    setIsEditing(product.id);
    setFormData({ name: product.name, price: product.price, imageUrl: product.imageUrl, category: product.category });
  };

  const handleSave = async (id?: string) => {
    try {
      if (id) {
        await updateDoc(doc(db, 'products', id), {
          ...formData,
          updatedAt: serverTimestamp()
        });
        setIsEditing(null);
      } else {
        await addDoc(collection(db, 'products'), {
          ...formData,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
        setIsAdding(false);
      }
    } catch (err: any) {
      alert("Failed to save. " + err.message);
      console.error("Save error:", err);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploading(true);
      
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_WIDTH = 500;
          const MAX_HEIGHT = 500;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);

          const dataUrl = canvas.toDataURL('image/jpeg', 0.6);
          setFormData({ ...formData, imageUrl: dataUrl });
          setUploading(false);
        };
        img.onerror = () => {
          alert('Failed to process image');
          setUploading(false);
        };
        img.src = event.target?.result as string;
      };
      reader.onerror = () => {
        alert('Failed to read file');
        setUploading(false);
      };
      reader.readAsDataURL(file);

    } catch (err: any) {
      alert("Failed to process image: " + err.message);
      console.error(err);
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this?")) {
      try {
        await deleteDoc(doc(db, 'products', id));
      } catch (err: any) {
        alert("Failed to delete: " + err.message);
        console.error("Delete Error:", err);
      }
    }
  };

  // If no products and not admin, don't show the section heavily.
  if (products.length === 0 && !user) {
    return (
      <section id="services" className="py-24 bg-brand-beige-light/30 dark:bg-zinc-950 transition-colors">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
           <h2 className="font-serif text-3xl font-semibold text-brand-black dark:text-zinc-100 mb-6 transition-colors">Our Collections</h2>
           <p className="text-zinc-500 dark:text-zinc-400 font-light italic transition-colors">Collections are currently being updated. Visit us in-store to see the latest arrivals.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="collections" className="py-24 bg-brand-beige-light/30 dark:bg-zinc-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-brand-black dark:text-zinc-100 mb-4 transition-colors">Latest Arrivals</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg font-light transition-colors">Explore our curated selection of premium men's clothing.</p>
          </div>
          
          {user && (
            <div className="mt-6 md:mt-0 flex gap-4">
              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={() => { setIsAdding(true); setFormData({ name: '', price: 0, imageUrl: '', category: 'Shirts' }); }} className="flex items-center text-sm font-medium bg-brand-black dark:bg-zinc-100 text-white dark:text-brand-black px-4 py-2 rounded hover:bg-zinc-800 dark:hover:bg-zinc-200 transition">
                <Plus className="w-4 h-4 mr-2" /> Add Item
              </motion.button>
              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout} className="flex items-center text-sm font-medium border border-zinc-300 dark:border-zinc-700 dark:text-zinc-300 px-4 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
                 <LogOut className="w-4 h-4 mr-2" /> Logout
              </motion.button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {isAdding && user && (
            <div className="bg-white dark:bg-zinc-950 p-4 rounded-lg shadow-sm border border-brand-beige-dark/30 dark:border-zinc-800 transition-colors">
               <h3 className="font-semibold mb-4 text-brand-black dark:text-zinc-100 transition-colors">Add New Item</h3>
               <div className="space-y-3">
                 <input type="text" placeholder="Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border dark:border-zinc-800 p-2 rounded text-sm outline-none dark:bg-zinc-900 dark:text-zinc-100 focus:border-brand-black dark:focus:border-zinc-500 transition-colors" />
                 <input type="number" placeholder="Price (DZD)" value={formData.price} onChange={e => setFormData({...formData, price: Number(e.target.value)})} className="w-full border dark:border-zinc-800 p-2 rounded text-sm outline-none dark:bg-zinc-900 dark:text-zinc-100 focus:border-brand-black dark:focus:border-zinc-500 transition-colors" />
                 <div className="flex gap-2">
                   <input type="text" placeholder="Image URL (e.g. https://...)" value={formData.imageUrl} onChange={e => setFormData({...formData, imageUrl: e.target.value})} className="w-full border dark:border-zinc-800 p-2 rounded text-sm outline-none dark:bg-zinc-900 dark:text-zinc-100 focus:border-brand-black dark:focus:border-zinc-500 transition-colors" />
                   <label className="flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border dark:border-zinc-700 rounded px-3 cursor-pointer transition-colors" title="Upload from Device">
                     {uploading ? <div className="w-4 h-4 border-2 border-brand-black dark:border-zinc-400 border-t-transparent rounded-full animate-spin"></div> : <Upload className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />}
                     <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={uploading} />
                   </label>
                 </div>
                 
                 <div className="flex justify-end gap-2 mt-4">
                   <motion.button 
                     whileTap={{ scale: 0.9 }}
                     onClick={() => setIsAdding(false)} className="p-2 text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
                     <X className="w-4 h-4" />
                   </motion.button>
                   <motion.button 
                     whileTap={{ scale: 0.9 }}
                     onClick={() => handleSave()} className="p-2 bg-brand-black dark:bg-zinc-100 text-white dark:text-brand-black rounded hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                     <Check className="w-4 h-4" />
                   </motion.button>
                 </div>
               </div>
            </div>
          )}

          {products.map(product => (
            <div key={product.id} className="group relative bg-white dark:bg-zinc-950 border border-brand-beige-dark/20 dark:border-zinc-800 rounded overflow-hidden shadow-sm hover:shadow-md transition-all">
              
              {isEditing === product.id ? (
                <div className="p-4 space-y-3">
                 <input type="text" placeholder="Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border dark:border-zinc-800 p-2 rounded text-sm outline-none dark:bg-zinc-900 dark:text-zinc-100 focus:border-brand-black dark:focus:border-zinc-500 transition-colors" />
                 <input type="number" placeholder="Price (DZD)" value={formData.price} onChange={e => setFormData({...formData, price: Number(e.target.value)})} className="w-full border dark:border-zinc-800 p-2 rounded text-sm outline-none dark:bg-zinc-900 dark:text-zinc-100 focus:border-brand-black dark:focus:border-zinc-500 transition-colors" />
                 <div className="flex gap-2">
                   <input type="text" placeholder="Image URL" value={formData.imageUrl} onChange={e => setFormData({...formData, imageUrl: e.target.value})} className="w-full border dark:border-zinc-800 p-2 rounded text-sm outline-none dark:bg-zinc-900 dark:text-zinc-100 focus:border-brand-black dark:focus:border-zinc-500 transition-colors" />
                   <label className="flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border dark:border-zinc-700 rounded px-3 cursor-pointer transition-colors" title="Upload from Device">
                     {uploading ? <div className="w-4 h-4 border-2 border-brand-black dark:border-zinc-400 border-t-transparent rounded-full animate-spin"></div> : <Upload className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />}
                     <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={uploading} />
                   </label>
                 </div>
                 
                 <div className="flex justify-end gap-2 mt-4">
                   <motion.button 
                     whileTap={{ scale: 0.9 }}
                     onClick={() => setIsEditing(null)} className="p-2 text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
                     <X className="w-4 h-4" />
                   </motion.button>
                   <motion.button 
                     whileTap={{ scale: 0.9 }}
                     onClick={() => handleSave(product.id)} className="p-2 bg-brand-black dark:bg-zinc-100 text-white dark:text-brand-black rounded hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                     <Check className="w-4 h-4" />
                   </motion.button>
                 </div>
               </div>
              ) : (
                <>
                  <div className="aspect-[4/5] bg-zinc-100 dark:bg-zinc-900 relative overflow-hidden flex items-center justify-center transition-colors">
                    {product.imageUrl ? (
                      <img src={product.imageUrl} alt={product.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <ImageIcon className="w-12 h-12 text-zinc-300 dark:text-zinc-700" />
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-1 transition-colors">{product.category}</p>
                    <h3 className="font-serif text-lg font-medium text-brand-black dark:text-zinc-100 mb-2 line-clamp-1 transition-colors">{product.name}</h3>
                    <p className="font-medium text-brand-black dark:text-zinc-100 transition-colors">{product.price} DZD</p>
                  </div>
                  
                  {user && (
                    <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.button 
                        whileTap={{ scale: 0.9 }}
                        onClick={() => startEdit(product)} className="bg-white dark:bg-zinc-800 p-2 text-brand-black dark:text-zinc-100 shadow rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </motion.button>
                      <motion.button 
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleDelete(product.id)} className="bg-white dark:bg-zinc-800 p-2 text-red-500 shadow rounded-full hover:bg-red-50 dark:hover:bg-zinc-700 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  )}
                </>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
