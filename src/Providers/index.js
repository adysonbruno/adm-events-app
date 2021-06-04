import {ProductsProvider} from "./products";
import {GraduationCartProvider} from "./graduationCart";
import {ConfraternizationCartProvider} from "./confraternizationCart";
import {WeddingCartProvider} from "./weddingCart";

const Providers = ({children}) => {
    return(
        <WeddingCartProvider>
            <ConfraternizationCartProvider>
                <GraduationCartProvider>
                    <ProductsProvider>
                        {children}
                    </ProductsProvider>
                </GraduationCartProvider>
            </ConfraternizationCartProvider>
        </WeddingCartProvider>
    )
}

export default Providers;