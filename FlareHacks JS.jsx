import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, ScrollView, Dimensions, TouchableHighlight, ImageBackground, Image, OpenURLButton, Linking } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        featuredDisplay: 'block',
        allStoresDisplay: 'none',
        accessoriesDisplay: 'none',
        beautyDisplay: 'none',
        clothesDisplay: 'none',
        homeDisplay: 'none',
        shoesDisplay: 'none',
        otherDisplay: 'none',
        
        categories: [
            {
                place: 0,
                name: "A C C E S S O R I E S",
                color: '#E3E4E0',
                icon: 'https://codehs.com/uploads/06d1343533dd37ad3866fc4982a99167',
            },
            {   
                place: 1,
                name: "B E A U T Y",
                color: '#EADAD0',
                icon: 'https://codehs.com/uploads/0266b162263b0c51d6c95dd2aba5dc9d',
            },
            {
                place: 2,
                name: "C L O T H I N G",
                color: '#D4C8BE',
                icon: 'https://codehs.com/uploads/ff27f350d0dd419421da342bceb75311',
            },
            {
                place: 3,
                name: "H O M E",
                color: '#C7C7BB',
                icon: 'https://codehs.com/uploads/eb9487dbc669f0f236a59bb32395a690',
            },
            {
                place: 4,
                name: "S H O E S",
                color: '#A8AD97',
                icon: 'https://codehs.com/uploads/280ee5d7b58c28affc52a2e911fdbc67',
            },
            {
                place: 5,
                name: "O T H E R",
                color: '#7F867B',
                icon: 'https://codehs.com/uploads/0801d040035b7e5071e3e1725b47e46b',
            }
        ],
        
        featuredStores: [
            {
                name: "G+ Co. Apparel",
                description: 
                    "G+ Co. Apparel is a black-owned business with high quality clothing for low prices. Some products include ties, sweatshits, and culture themed hats.",
                url: 'https://gandcoapparel.com/',
                color: '#B8805F',
            } ,
            {
                name: "Miyagi Beauty Supply",
                description: 
                    "A black-owned beauty supply store, with products including custom shoes, accessories, and more.",
                url: 'https://www.miyagibeauty.com/',
                color: '#BC938A',
            } ,
            {
                name: "Material Life",
                description: 
                    "Material Lide celebrates black history by offering a number of products that range from clothes, to stationary, to home decor.",
                url: 'https://www.material.life/',
                color: '#B8805F',
            } ,
            {
                name: "Board Game Brothas",
                description: 
                    "Omari Akil and Hamu Dennis created Board Game Brothas to encourage diversity in the board game industry, which they do through their board game, 'Rap Godz'.",
                url: 'https://www.boardgamebrothas.com/',
                color: '#BC938A',
            } ,
        ],
        
        accessoriesStores: [
            {
                name: "Roclayco",
                description: 
                    "This business offers product from earring to clay cutters to barretes, all hand-crafted.",
                url: 'https://www.roclayco.com/',
                color: '#EFF0EA',
            }, 
            {
                name: "Little Pieces Jewellery",
                description: 
                    "This LA-based business sells 'Statement clay jewelry', which comes in many abstract shapes.",
                url: 'https://littlepiecesjewelry.com/',
                color: '#DEE9E7',
            }, 
            {
                name: "Simply Made by Bekah",
                description: 
                    "Here you can find gorgeous earrings. Crafted with love and care, these earrings look great with any outfit and is perfect for all ages.",
                url: 'https://simplymadebybekah.com/password',
                color: '#C5D0CC',
            }, 
        ],
        
        beautyStores: [
            {
                name: "prettybby beauty",
                description: 
                    "This store sells affordable, yet fun and colorful lip products as well as lucisous false eyelashes that are perfect for teenagers. ",
                url: 'https://prettybbybeauty.com/',
                color: '#D1AFC7',
            }, 
            {
                name: "Amelie May Cosmetics",
                description: 
                    "This brand run by teenager Amelie May showcases many handmade cosmetics such as lip tints and moisturizers. ",
                url: 'https://ameliemaycosmetics.bigcartel.com/',
                color: '#DD677B',
            }, 
        ],
        
        clothesStores: [
            {
                name: "Luminosa Clothing",
                description: 
                    "Run by Laura McDermott, customers can find cute summer clothing that comes in eco-friendly packaging. ",
                url: 'http://luminosaclothing.com/',
                color: '#9CA9B1',
            }, 
            {
                name: "Shop Sur La Côte",
                description: 
                    "French for 'on the coast', find luxury clothing fit for summer vacation. Products range from dresses to swimwear. ",
                url: 'https://shopsurlacote.com/',
                color: '#F3BEAF',
            }, 
            {
                name: "By Together",
                description: 
                    "Here customers can find 'Chic Boho' clothing, from blouses to pyjama sets to outerwear.",
                url: 'https://www.bytogether.com/',
                color: '#D99830',
            }, 
        ],
        
        homeStores: [
            {
                name: "True Succulents",
                description: 
                    "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
                url: 'https://www.truesucculents.com/',
                color: '#B5CBCC',
            }, 
            {
                name: "cloth & wool",
                description: 
                    "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
                url: 'https://clothandwoolshop.com/',
                color: '#7BB3AD',
            }, 
        ],
        
        shoesStores: [
            {
                name: "Niccustoms",
                description: 
                    "Niccustoms is a business that customizes popular shoe brands such as Nike and Vans. They also offer custom phone cases for any model. ",
                url: 'https://www.niccustoms.com/?gclid=CjwKCAjwsO_4BRBBEiwAyagRTYMEoQATzZSZYMdi8CJE7bDHKdXMfFj5-_jJZDS1cGpMmFypWM064hoCHuYQAvD_BwE',
                color: '#F0D5BB',
            }, 
            {
                name: "s4customs",
                description: 
                    "s4customs offers customers luxury customized shoes and graphic t-shirts",
                url: 'https://www.s4customs.com/',
                color: '#898B55',
            }, 
        ],
        
        otherStores: [
            {
                name: "Mountain Ridge Farm PA",
                description: 
                    "Made by Carolina Licata, this business offers many bath delicacies. These bar soaps are made with natural ingredients, including honey and beeswax.",
                url: 'https://www.mountainridgefarmpa.com/',
                color: '#DA6C63',
            }, 
        ],
    }
    
    handlePageListPress = () => {
        this.setState({
            featuredDisplay: 'none',
            allStoresDisplay: 'block',
            accessoriesDisplay: 'none',
            beautyDisplay: 'none',
            clothesDisplay: 'none',
            homeDisplay: 'none',
            shoesDisplay: 'none',
            otherDisplay: 'none',
        })
    }
    
    handleHomePress = () => {
        this.setState({
            featuredDisplay: 'block',
            allStoresDisplay: 'none',
        })
    }
    
    changeScreen = (num) => {
        this.setState({
            allStoresDisplay: 'none',
        })
        if (num === 0){
            this.setState({
                accessoriesDisplay: 'block',
            })
        }
        if (num === 1){
            this.setState({
                beautyDisplay: 'block',
            })
        }
        if (num === 2){
            this.setState({
                clothesDisplay: 'block',
            })
        }
        if (num === 3){
            this.setState({
                homeDisplay: 'block',
            })
        }
        if (num === 4){
            this.setState({
                shoesDisplay: 'block',
            })
        }
        if (num === 5){
            this.setState({
                otherDisplay: 'block',
            })
        }
    }
    
    
    render() {
        return (
            <View style={styles.container}>
                <View style = {{ display: this.state.featuredDisplay }}>
                    <ScrollView styles = {styles.scrollview}>
                        <View style = {styles.featuredPageContainer}>
                            <View style = {styles.featuredContainer}>
                                <Text style = {styles.featuredText}>
                                    Featured
                                </Text>
                            </View>
                            <Image
                                source={{ uri: 'https://codehs.com/uploads/eec8a4e685e1a6a36bac222a5edac710' }}
                                style={styles.blmImage}
                            />
                            <View style = {styles.blmTextContainer}>
                                <Text style = {styles.blmText}>
                                    With the struggles that are associated with the current pandemic and the prominent racial injustice occuring, many Black-owned businesses are finding it hard to increase sales. Here are some Black-owned businesses that you can support during these uncertain times. By clicking on the name of the store, you can easily access the numeral products that these wonderful businesses have to offer.
                                </Text>
                            </View>
                        </View>
                        
                        <View style = {styles.storesListContainer}>
                            {this.state.featuredStores.map((store) => (
                                <View style = {[{backgroundColor: store.color}, styles.storeContainer]}>
                                    <Text style={styles.storeName}
                                          onPress={() => Linking.openURL(store.url)}>
                                        {store.name}
                                    </Text>
                                    <Text style = {styles.storeDescription}>
                                        {store.description}
                                    </Text>
                                </View>    
                            ))}
                                
                        </View> 
                    </ScrollView>
                    
                    <TouchableHighlight
                        onPress = {this.handlePageListPress}
                    >
                        <View style = {styles.navButton}>
                            <Text style = {styles.navButtonText}>
                                A L L  S T O R E S
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                
                
                <View style = {{ display: this.state.allStoresDisplay }}>
                    <ScrollView>
                        {this.state.categories.map((category) => (
                            <TouchableHighlight
                                onPress = {() => this.changeScreen(category.place)}
                            >
                                <View style = {[{backgroundColor: category.color}, styles.categoryContainer]}>
                                    <ImageBackground
                                        style={styles.background}
                                        source={{ uri: category.icon }}
                                    >
                                        <Text style = {styles.categoryContainerText}>
                                            {category.name}
                                        </Text>
                                    </ImageBackground>
                                </View>
                            </TouchableHighlight>
                        ))}
                    </ScrollView>
                    
                    
                    <TouchableHighlight
                        onPress = {this.handleHomePress}
                    >
                        <View style = {styles.navButton}>
                            <Text style = {styles.navButtonText}>
                                F E A T U R E D
                            </Text>
                        </View>
                    </TouchableHighlight>
                    
                </View>
                
                <View style = {{ display: this.state.accessoriesDisplay }}>
                    <View style = {[styles.storesListContainer, {height: (deviceHeight / 12) * 11}]}>
                        {this.state.accessoriesStores.map((store) => (
                            <View style = {[{backgroundColor: store.color}, styles.storeContainer]}>
                                <Text style={styles.storeName}
                                      onPress={() => Linking.openURL(store.url)}>
                                    {store.name}
                                </Text>
                                <Text style = {styles.storeDescription}>
                                    {store.description}
                                </Text>
                            </View>    
                        ))}
                    </View>
                    
                    <TouchableHighlight
                        onPress = {() => this.handlePageListPress}
                    >
                        <View style = {styles.navButton}>
                            <Text style = {styles.navButtonText}>
                                A L L  S T O R E S
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                
                <View style = {{ display: this.state.beautyDisplay }}>
                    <View style = {[styles.storesListContainer, {height: (deviceHeight / 12) * 11}]}>
                        {this.state.beautyStores.map((store) => (
                            <View style = {[{backgroundColor: store.color}, styles.storeContainer]}>
                                <Text style={styles.storeName}
                                      onPress={() => Linking.openURL(store.url)}>
                                    {store.name}
                                </Text>
                                <Text style = {styles.storeDescription}>
                                    {store.description}
                                </Text>
                            </View>    
                        ))}
                    </View>
                    
                    <TouchableHighlight
                        onPress = {() => this.handlePageListPress}
                    >
                        <View style = {styles.navButton}>
                            <Text style = {styles.navButtonText}>
                                A L L  S T O R E S
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                
                <View style = {{ display: this.state.clothesDisplay }}>
                    <View style = {[styles.storesListContainer, {height: (deviceHeight / 12) * 11}]}>
                        {this.state.clothesStores.map((store) => (
                            <View style = {[{backgroundColor: store.color}, styles.storeContainer]}>
                                <Text style={styles.storeName}
                                      onPress={() => Linking.openURL(store.url)}>
                                    {store.name}
                                </Text>
                                <Text style = {styles.storeDescription}>
                                    {store.description}
                                </Text>
                            </View>    
                        ))}
                    </View>
                    
                    <TouchableHighlight
                        onPress = {() => this.handlePageListPress}
                    >
                        <View style = {styles.navButton}>
                            <Text style = {styles.navButtonText}>
                                A L L  S T O R E S
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                
                <View style = {{ display: this.state.shoesDisplay }}>
                    <View style = {[styles.storesListContainer, {height: (deviceHeight / 12) * 11}]}>
                        {this.state.shoesStores.map((store) => (
                            <View style = {[{backgroundColor: store.color}, styles.storeContainer]}>
                                <Text style={styles.storeName}
                                      onPress={() => Linking.openURL(store.url)}>
                                    {store.name}
                                </Text>
                                <Text style = {styles.storeDescription}>
                                    {store.description}
                                </Text>
                            </View>    
                        ))}
                    </View>
                    
                    <TouchableHighlight
                        onPress = {() => this.handlePageListPress}
                    >
                        <View style = {styles.navButton}>
                            <Text style = {styles.navButtonText}>
                                A L L  S T O R E S
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                
                <View style = {{ display: this.state.homeDisplay }}>
                    <View style = {[styles.storesListContainer, {height: (deviceHeight / 12) * 11}]}>
                        {this.state.homeStores.map((store) => (
                            <View style = {[{backgroundColor: store.color}, styles.storeContainer]}>
                                <Text style={styles.storeName}
                                      onPress={() => Linking.openURL(store.url)}>
                                    {store.name}
                                </Text>
                                <Text style = {styles.storeDescription}>
                                    {store.description}
                                </Text>
                            </View>    
                        ))}
                    </View>
                    
                    <TouchableHighlight
                        onPress = {() => this.handlePageListPress}
                    >
                        <View style = {styles.navButton}>
                            <Text style = {styles.navButtonText}>
                                A L L  S T O R E S
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                
                <View style = {{ display: this.state.otherDisplay }}>
                    <View style = {[styles.storesListContainer, {height: (deviceHeight / 12) * 11}]}>
                        {this.state.otherStores.map((store) => (
                            <View style = {[{backgroundColor: store.color}, styles.storeContainer]}>
                                <Text style={styles.storeName}
                                      onPress={() => Linking.openURL(store.url)}>
                                    {store.name}
                                </Text>
                                <Text style = {styles.storeDescription}>
                                    {store.description}
                                </Text>
                            </View>    
                        ))}
                    </View>
                    
                    <TouchableHighlight
                        onPress = {() => this.handlePageListPress}
                    >
                        <View style = {styles.navButton}>
                            <Text style = {styles.navButtonText}>
                                A L L  S T O R E S
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    
    featuredPageContainer: {
        alignItems: 'center',
        justifyContent: 'baseline',
    },
    featuredContainer: {
        height: deviceHeight / 8,
        width: deviceWidth, 
        
        // borderWidth: 1,
        
    },
    featuredText: {
        marginLeft: deviceWidth / 15,
        marginTop: (deviceHeight / 532) * 15,
        
        fontSize: (deviceHeight / 133) * 10,
        fontFamily: 'Avenir',
        fontWeight: 600,
        color: '#7C6556',
    },
    blmImage: {
        height: (deviceHeight / 133) * 60,
        width: (deviceWidth / 15) * 13,
    },
    blmTextContainer: {
        height: (deviceHeight / 133) * 55,
        width: (deviceWidth / 15) * 13,
    },
    blmText: {
        fontSize: (deviceHeight / 532) * 12,  
        marginTop: (deviceHeight / 266) * 5,
        color: '#7C6556',
        fontFamily: 'Avenir'
    },
    
    storesListContainer: {
        width: deviceWidth,  
        alignItems: 'center',
    },
    storeContainer: {
        height: (deviceHeight / 133) * 62,
        width: (deviceWidth / 15) * 13,
        borderRadius: 30,
        marginBottom: (deviceHeight / 266) * 5,
        paddingLeft: deviceWidth / 20,
        paddingTop: (deviceHeight / 133) * 5,
    },
    storeName: {
        fontFamily: 'Avenir',  
        fontSize: (deviceHeight / 133) * 7,
        color: 'white',
        width: (deviceWidth / 30) * 23,
    },
    storeDescription: {
        fontFamily: "Avenir",
        fontSize: (deviceHeight / 532) * 15,
        color: 'white',
        marginTop: deviceWidth / 30,
    },
    
    navButton: {
        height: deviceHeight / 12,
        width: deviceWidth, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroudColor: 'black',
    },
    navButtonText: {
        fontFamily: 'Avenir',
        fontSize: (deviceHeight / 133) * 6, 
        color: 'white',
    },
    scrollview: {
        height: (deviceHeight / 12) * 11,
    },
    
    background: {
        height: (deviceHeight / 2),
        width: (deviceWidth / 28) * 25, 
        
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryContainer: {
        height: deviceHeight / 2,
        width: (deviceWidth / 28) * 25,    
    
        marginTop: (deviceHeight / 133) * 4,
        marginLeft: (deviceWidth / 56) * 3,
        marginRight: (deviceWidth / 56) * 3,
        
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryContainerText: {
        fontFamily: "Avenir-Light",
        color: "white",
        fontSize: (deviceHeight / 80) * 2.5,
        
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: 1,
        
        padding: (deviceHeight / 80) * 3,
        textAlign: 'center'
    }
});