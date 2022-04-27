(function() {var implementors = {};
implementors["linfa"] = [];
implementors["linfa_svm"] = [{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"linfa/dataset/trait.Float.html\" title=\"trait linfa::dataset::Float\">Float</a>, D:&nbsp;<a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/data_traits/trait.Data.html\" title=\"trait ndarray::data_traits::Data\">Data</a>&lt;Elem = F&gt;&gt; <a class=\"trait\" href=\"linfa/traits/trait.Predict.html\" title=\"trait linfa::traits::Predict\">Predict</a>&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;D, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dim/struct.Dim.html\" title=\"struct ndarray::dimension::dim::Dim\">Dim</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.usize.html\">usize</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.array.html\">; 1]</a>&gt;&gt;, <a class=\"struct\" href=\"linfa/dataset/struct.Pr.html\" title=\"struct linfa::dataset::Pr\">Pr</a>&gt; for <a class=\"struct\" href=\"linfa_svm/struct.Svm.html\" title=\"struct linfa_svm::Svm\">Svm</a>&lt;F, <a class=\"struct\" href=\"linfa/dataset/struct.Pr.html\" title=\"struct linfa::dataset::Pr\">Pr</a>&gt;","synthetic":false,"types":["linfa_svm::Svm"]},{"text":"impl&lt;'a, F:&nbsp;<a class=\"trait\" href=\"linfa/dataset/trait.Float.html\" title=\"trait linfa::dataset::Float\">Float</a>, D:&nbsp;<a class=\"trait\" href=\"https://docs.rs/ndarray/0.15/ndarray/data_traits/trait.Data.html\" title=\"trait ndarray::data_traits::Data\">Data</a>&lt;Elem = F&gt;&gt; <a class=\"trait\" href=\"linfa/traits/trait.Predict.html\" title=\"trait linfa::traits::Predict\">Predict</a>&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;D, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dim/struct.Dim.html\" title=\"struct ndarray::dimension::dim::Dim\">Dim</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.usize.html\">usize</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.array.html\">; 1]</a>&gt;&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.bool.html\">bool</a>&gt; for <a class=\"struct\" href=\"linfa_svm/struct.Svm.html\" title=\"struct linfa_svm::Svm\">Svm</a>&lt;F, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.bool.html\">bool</a>&gt;","synthetic":false,"types":["linfa_svm::Svm"]},{"text":"impl <a class=\"trait\" href=\"linfa/traits/trait.Predict.html\" title=\"trait linfa::traits::Predict\">Predict</a>&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/data_repr/struct.OwnedRepr.html\" title=\"struct ndarray::data_repr::OwnedRepr\">OwnedRepr</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.f32.html\">f32</a>&gt;, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dim/struct.Dim.html\" title=\"struct ndarray::dimension::dim::Dim\">Dim</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.usize.html\">usize</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.array.html\">; 1]</a>&gt;&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.f32.html\">f32</a>&gt; for <a class=\"struct\" href=\"linfa_svm/struct.Svm.html\" title=\"struct linfa_svm::Svm\">Svm</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.f32.html\">f32</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.f32.html\">f32</a>&gt;","synthetic":false,"types":["linfa_svm::Svm"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"linfa/traits/trait.Predict.html\" title=\"trait linfa::traits::Predict\">Predict</a>&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ViewRepr.html\" title=\"struct ndarray::ViewRepr\">ViewRepr</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.f32.html\">f32</a>&gt;, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dim/struct.Dim.html\" title=\"struct ndarray::dimension::dim::Dim\">Dim</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.usize.html\">usize</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.array.html\">; 1]</a>&gt;&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.f32.html\">f32</a>&gt; for <a class=\"struct\" href=\"linfa_svm/struct.Svm.html\" title=\"struct linfa_svm::Svm\">Svm</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.f32.html\">f32</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.f32.html\">f32</a>&gt;","synthetic":false,"types":["linfa_svm::Svm"]},{"text":"impl <a class=\"trait\" href=\"linfa/traits/trait.Predict.html\" title=\"trait linfa::traits::Predict\">Predict</a>&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/data_repr/struct.OwnedRepr.html\" title=\"struct ndarray::data_repr::OwnedRepr\">OwnedRepr</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.f64.html\">f64</a>&gt;, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dim/struct.Dim.html\" title=\"struct ndarray::dimension::dim::Dim\">Dim</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.usize.html\">usize</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.array.html\">; 1]</a>&gt;&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.f64.html\">f64</a>&gt; for <a class=\"struct\" href=\"linfa_svm/struct.Svm.html\" title=\"struct linfa_svm::Svm\">Svm</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.f64.html\">f64</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.f64.html\">f64</a>&gt;","synthetic":false,"types":["linfa_svm::Svm"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"linfa/traits/trait.Predict.html\" title=\"trait linfa::traits::Predict\">Predict</a>&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ArrayBase.html\" title=\"struct ndarray::ArrayBase\">ArrayBase</a>&lt;<a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/struct.ViewRepr.html\" title=\"struct ndarray::ViewRepr\">ViewRepr</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.f64.html\">f64</a>&gt;, <a class=\"struct\" href=\"https://docs.rs/ndarray/0.15/ndarray/dimension/dim/struct.Dim.html\" title=\"struct ndarray::dimension::dim::Dim\">Dim</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.usize.html\">usize</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.array.html\">; 1]</a>&gt;&gt;, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.f64.html\">f64</a>&gt; for <a class=\"struct\" href=\"linfa_svm/struct.Svm.html\" title=\"struct linfa_svm::Svm\">Svm</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.f64.html\">f64</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.60.0/std/primitive.f64.html\">f64</a>&gt;","synthetic":false,"types":["linfa_svm::Svm"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()