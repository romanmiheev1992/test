import { DataBase } from "./interfaces";

export const adult = 'https://s3-alpha-sig.figma.com/img/e628/df9e/6ac34e492613415d0bee2d14db511e5b?Expires=1658707200&Signature=P~STIzdOQM6XJLPwJmizPF7H76vKv67qJXKph-5pxKnDHA0o0V-C~uf4PrznamcK5HWeU-kdjRekfOQrNLIn3Fx05yU0Lja8tUwQ9yRNjHisjzTBaETSlyb9JFbO9vbukAbKsDyBCYaZnL4YVv29u3Me~kEvMiNFvtdV8DO2rzPuu5HuZcHvzpKoWzPe8diWJsstW6Xn3kD24muQjFPJ4yVW6uta4w7FVEc7zjQC~ysBRngYJDoAEL74084YGKSpv1VPB71n~S92LB2fgJ2UCCJ-CyPn97KCu3f1FwIMk7NscXFR6buSHxjmNY5xsRByHuylcDQkp8X5KV4s49xTnw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'

export const personsDatabase: DataBase[] = [
    {
        title: 'Взрослый',
        x: 490,
        y: 60,
        bg: 260,
        img: adult,
        text: [
            "Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте.",
            "По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки.",
            "По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания. "
        ]
    },
    {
        title: 'Ребенок',
        x: 190,
        y: 105,
        bg: 293,
        img: 'https://s3-alpha-sig.figma.com/img/7b5b/d538/34bba82c050118fb53a482e94e5f896c?Expires=1658707200&Signature=UY2Tq3CT5DPlUCsfkxxef7t73DomNMJU-tG~TgPeIYngRaBCOqgLzQtShWTYhZ58xkjpBpdLXvR0ZSNf2dmYBv-u7FDmR4xnDnrcew2DfU4YWKkDAgBQs5pzx8AsQcM1r-D84LqF8ZrUwieiMmuIEI~Cc23iQwKhCTxR2XT90dz8fN2T2lvHLBVObQSlbV45Nq9n6~4bTBnKSFjUZQGm2j3Joc5uKnsXgIBlwI60wcArdQh6Bwix5ad2MPhkO-~-rIz-iT-t~VEem8tf0pvhGf5iyb4xCpX9SsVDOhNMRwsCUoD~YuqsBkPB0GLuRcczwLt7lkf4jSuLU4tY60kHjQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        text: [
            "Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность в отношении наличия СМА.",
            "Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и обеспечение терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются дегенерации при прогрессировании заболевания"
        ]
    }
]

export const simptomsDataBase = [
    {
        img: 'https://s3-alpha-sig.figma.com/img/49fc/f3f8/0fbc463339af54cfc5aa2cf87f3c0dc5?Expires=1658707200&Signature=DVNGUnqT-pAnQAA3CMZCxqxrxIRgWzXetiyzn3WIn~qBq33YMdJ2jp6y1OoV~WwI04AQogC~fYOyxjthDpBMuKdjhvXc1Ky6XArnBI2u8a9h5a9VKUbNJZEFyrC3Y~Vn2GHK0p~S7na2ujQMVfnHmICktf2Ad-aPu~23KKVwuLr6RowQ~t95HBvjhhS81sJVHEuXml60I3K~xg7d29HryjwsNBdyagB9lqiTHmQ6CKGfSVBgSzQzuv38ETrARhYDXha6bWRrWWqPBF7I0e8kvqYVlNl246edkwwVsriW1Ys5Ly2I4~JnobLsetMOVZujO~Zk1NfBOw0DMG-WkRCv9A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        text: 'Сколиоз',
        top: -255,
        right: -55
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/e595/10cb/097209a976a8f015a4323552afe28923?Expires=1658707200&Signature=budgU9Ko6jcpkfNHCgFOEKKnHsALh11p495x9rQbQOTmoG~0NAmlJc06YY3fCG8npGwrHFQaKxb1aMlAT~hto7G5PnfLYFgTgv0RQsofjM69GKtjiLI2IBAMurnE3VyVv9FVIGAx0ynpxVbT-zlWzobM9vmhezkYIrjH5qSe~LvfkCUtlfk7fs9naFXeaCH3Ni7R-BwQeqD~h7cb7rFADbBsbkikXeBevzm24Zp6PzW2XwXzS-Vv3YTPdqmQvw3a3Clewb7x14t9Ohj2Q5OJtMJKX0hGuaIg9~E6uwFkPa7RXhrdVAcmtDoi874uBRMUasN~7I4J0~PNGAX-VG4OJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        text: 'Ограниченная способность поднимать руки и переносить предметы',
        top: -175,
        right: 150
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/43ee/1cb6/e5b6bdfb4a6d7131a472e85a69bad888?Expires=1658707200&Signature=gU0Hn~7Dms4N-6G4dl1QufgMLh04XkhCin7~0EswrOb1JGT7iZZcvJHQvBhpKImAW0ILm3hPriLoUQPdAIPR1cXUNz~WeHfXf~RfW1v7gmdeRZXC3gQDbWZ6Xwf0hhdx~~~hLPxAMnSZaEG7tujtr34A5aKPHKuA7KSsHOshAdDyLpAVXXCWjS2LNfCYg~EptawGT34XHCcMs-4b~mB60rlhKmTr2vcs94midVYrja2a4H874xvR6e8reV1y~mJN6ov6jT7IcWETqmZvMXrghaGHnc52HIDUtFrNcPJAIfkv2Rspcrl31mU7KIWDFkAIStHPBw2PPGa4VQF0~PDdeQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        text: 'Нарушения жевания и глотания',
        top: 0,
        right: 225
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/1ab6/0d32/599cd55b678d615bf8dbe8728dd56fbf?Expires=1658707200&Signature=gUZoJ7P4wYeX~W6zMUwd4gDAmNfkkcqcbEjVqo~qL2g0Ebsp1AcnDrMPQTbP2ynUJd99v3OLd9O3AvpnxW4U18YDxSJaGQGPrd49Q~3X6Msov8ikB2pRz4BL8nb9IPWMy0417g9U9RGauvj0ylk9-dB-rEoPKAVJAT~YMeecHcH4sn992MGyZlEfBEAIXiS8kcqn1oveJrK0KwbMIVLS9wbF~Kk7Ahs3M~enclFHcFx-~5p3IYpDNBnA-MIhA8f3Oa1aYZEaayrnuS4MbohZMJH6JhXIAs2VCJGrayUsD0hiTRAMImTidO8VcF4tHcZ4rXjCuq5boGH5Yf6slu5lxA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        text: 'Дыхательная недостаточность/ респираторная дисфункция',
        top: 210,
        right: 155
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/8920/6151/9b3201cd12d64bb13ec675a7da5df76d?Expires=1658707200&Signature=QXPl8VYeoJ~bg5GY3VeNUIwPzat5Uaquf5KxwiUaV2~BffzQjHyer0Hb6pxOcZJDXOQFNh3MA7qN6gNOLiSuGPAcRiW5N36z9muVcN8TqB1kf5XPOjUZDCFzKDKGnuFKTnmz5HPbY97x3n2Yz1B89XKs0IGlAcJJ2UCikn9wqiRENvO11eRgtRTYJVC4HrPvW4st-lyFNTIoXGmToLKS4N5n9XkVsfWGhAf85FKVeHyvQEbAmmJ9m3G29Rv44gmgsuNOluKMAi2mvPr1hZ-dXx6XwXHP1Olv1IxQiEpLHipsy1~EZOBRRIIcd0n5VlfJtVPnY54YjhUHnyoHlMTTZA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        text: 'Неспособность бегать, изменение походки',
        top: 295,
        right: -55
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/d61a/a238/3e72c393f989eec1df562b1f56a4f8ef?Expires=1658707200&Signature=epqGWA-CEKfX2CYbrwbk65BAFHv6AM~QzW~vjtIaVDs6QFG4UTrvru5wykFPfIKOO~fHw76K5Dx5bsRZACLbdZz06HVqpt3-qA3S5O3frKeq3VqUpgsL6yfhGL0p~vGJ6uXxrx0Hi6Gh25w5tnZHQSe74iR2gI4vRZLxnt-Rrrw1l1qScTd8ZKUaOQ6MBFnZrTC7IEbifCchc56nuIFMStUPc9sp2bm9BtnSiZew9yYydwcghmLxswxdjHCAiG3R1Wf3s6MaXRgSwc~DiHF5vsxCJem1iLz2vqgfx3LrxITrmTgUYIhLGuM~4DEyMBZ-npMbym1OTbA024M7qAcq~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        text: 'Контрактура суставов',
        top: 210,
        right: -255
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/f996/56d2/b4d62b5006bad40f05e4973f176f44ec?Expires=1658707200&Signature=PTm72jY7j-wODvCLHk28n15S2qDSVYkFp-LAM2RE1SophbvXDDLub3tPRqJcMdTkejjb5JadbyPZ83-s1q~QA1QopqH1-nWK7zgRVMDfDR8gI54Saw4FkNnzipWkeJV9gu4KaURT31phRjA7khZejOhCT-PM1DKLn59zGQmIbR7HQoog9OqWnKXKsfUfXc1rj0bhFQaM-44UXvfwNJOoUULSl1dc1aIFGU72UQIzX7t0jtz5jL0sdacSwTIxlXuibrgae5-LLgI~NB6PL2ejJfYWD335rxr067Muqsj9V-v9IBm3ekZ51G8tpT04oooj7ng90wUZeLj0DnSKwYaM5g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        text: 'Вывих бедра',
        top: 0,
        right: -335
    },
    {
        img: 'https://s3-alpha-sig.figma.com/img/cc97/a86e/5edfb910934dd936ac676b6525e55f75?Expires=1658707200&Signature=KNY4BxsKuMWRbDlXkE3x6ZZLGBwVjEEd1qx4BqIjGlED1vJGY5sUhqNziBj-1-kM8qQdpBWhhaH~xf-v76crYfX7B2X3PKRVOINbqn9fJ4LmxFw0~FBsCgZOh7Dh6poGlqg1GOCxMdP1SYjLG4AuVnEEaveVJKOhdGTJ3UvSe-YoyPShfbXTf3182pJyaBi-IyADYCbP3R1825bmrWhfeEuZRg1w-SDnz~kldXx9TGKfR9~gvA2SIagM~1POAwl6coa0fJb1DEHzoCbqWwCM-jVegQb2iIWoVAkR820e4InaoUxoduCk0awWk7BE0ELVgdcM7cxEsPSRj082iIvvcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        text: 'Утомляемость',
        top: -190,
        right: -250
    },

]



// export const simptomsDataBase = [
//     {
//         img: 'https://s3-alpha-sig.figma.com/img/49fc/f3f8/0fbc463339af54cfc5aa2cf87f3c0dc5?Expires=1658707200&Signature=DVNGUnqT-pAnQAA3CMZCxqxrxIRgWzXetiyzn3WIn~qBq33YMdJ2jp6y1OoV~WwI04AQogC~fYOyxjthDpBMuKdjhvXc1Ky6XArnBI2u8a9h5a9VKUbNJZEFyrC3Y~Vn2GHK0p~S7na2ujQMVfnHmICktf2Ad-aPu~23KKVwuLr6RowQ~t95HBvjhhS81sJVHEuXml60I3K~xg7d29HryjwsNBdyagB9lqiTHmQ6CKGfSVBgSzQzuv38ETrARhYDXha6bWRrWWqPBF7I0e8kvqYVlNl246edkwwVsriW1Ys5Ly2I4~JnobLsetMOVZujO~Zk1NfBOw0DMG-WkRCv9A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
//         text: 'Сколиоз',
//         top: -215,
//         right: -55
//     },
//     {
//         img: 'https://s3-alpha-sig.figma.com/img/e595/10cb/097209a976a8f015a4323552afe28923?Expires=1658707200&Signature=budgU9Ko6jcpkfNHCgFOEKKnHsALh11p495x9rQbQOTmoG~0NAmlJc06YY3fCG8npGwrHFQaKxb1aMlAT~hto7G5PnfLYFgTgv0RQsofjM69GKtjiLI2IBAMurnE3VyVv9FVIGAx0ynpxVbT-zlWzobM9vmhezkYIrjH5qSe~LvfkCUtlfk7fs9naFXeaCH3Ni7R-BwQeqD~h7cb7rFADbBsbkikXeBevzm24Zp6PzW2XwXzS-Vv3YTPdqmQvw3a3Clewb7x14t9Ohj2Q5OJtMJKX0hGuaIg9~E6uwFkPa7RXhrdVAcmtDoi874uBRMUasN~7I4J0~PNGAX-VG4OJg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
//         text: 'Ограниченная способность поднимать руки и переносить предметы',
//         top: -145,
//         right: 120
//     },
//     {
//         img: 'https://s3-alpha-sig.figma.com/img/43ee/1cb6/e5b6bdfb4a6d7131a472e85a69bad888?Expires=1658707200&Signature=gU0Hn~7Dms4N-6G4dl1QufgMLh04XkhCin7~0EswrOb1JGT7iZZcvJHQvBhpKImAW0ILm3hPriLoUQPdAIPR1cXUNz~WeHfXf~RfW1v7gmdeRZXC3gQDbWZ6Xwf0hhdx~~~hLPxAMnSZaEG7tujtr34A5aKPHKuA7KSsHOshAdDyLpAVXXCWjS2LNfCYg~EptawGT34XHCcMs-4b~mB60rlhKmTr2vcs94midVYrja2a4H874xvR6e8reV1y~mJN6ov6jT7IcWETqmZvMXrghaGHnc52HIDUtFrNcPJAIfkv2Rspcrl31mU7KIWDFkAIStHPBw2PPGa4VQF0~PDdeQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
//         text: 'Нарушения жевания и глотания',
//         top: 0,
//         right: 175
//     },
//     {
//         img: 'https://s3-alpha-sig.figma.com/img/1ab6/0d32/599cd55b678d615bf8dbe8728dd56fbf?Expires=1658707200&Signature=gUZoJ7P4wYeX~W6zMUwd4gDAmNfkkcqcbEjVqo~qL2g0Ebsp1AcnDrMPQTbP2ynUJd99v3OLd9O3AvpnxW4U18YDxSJaGQGPrd49Q~3X6Msov8ikB2pRz4BL8nb9IPWMy0417g9U9RGauvj0ylk9-dB-rEoPKAVJAT~YMeecHcH4sn992MGyZlEfBEAIXiS8kcqn1oveJrK0KwbMIVLS9wbF~Kk7Ahs3M~enclFHcFx-~5p3IYpDNBnA-MIhA8f3Oa1aYZEaayrnuS4MbohZMJH6JhXIAs2VCJGrayUsD0hiTRAMImTidO8VcF4tHcZ4rXjCuq5boGH5Yf6slu5lxA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
//         text: 'Дыхательная недостаточность/ респираторная дисфункция',
//         top: 170,
//         right: 145
//     },
//     {
//         img: 'https://s3-alpha-sig.figma.com/img/8920/6151/9b3201cd12d64bb13ec675a7da5df76d?Expires=1658707200&Signature=QXPl8VYeoJ~bg5GY3VeNUIwPzat5Uaquf5KxwiUaV2~BffzQjHyer0Hb6pxOcZJDXOQFNh3MA7qN6gNOLiSuGPAcRiW5N36z9muVcN8TqB1kf5XPOjUZDCFzKDKGnuFKTnmz5HPbY97x3n2Yz1B89XKs0IGlAcJJ2UCikn9wqiRENvO11eRgtRTYJVC4HrPvW4st-lyFNTIoXGmToLKS4N5n9XkVsfWGhAf85FKVeHyvQEbAmmJ9m3G29Rv44gmgsuNOluKMAi2mvPr1hZ-dXx6XwXHP1Olv1IxQiEpLHipsy1~EZOBRRIIcd0n5VlfJtVPnY54YjhUHnyoHlMTTZA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
//         text: 'Неспособность бегать, изменение походки',
//         top: 255,
//         right: -55
//     },
//     {
//         img: 'https://s3-alpha-sig.figma.com/img/d61a/a238/3e72c393f989eec1df562b1f56a4f8ef?Expires=1658707200&Signature=epqGWA-CEKfX2CYbrwbk65BAFHv6AM~QzW~vjtIaVDs6QFG4UTrvru5wykFPfIKOO~fHw76K5Dx5bsRZACLbdZz06HVqpt3-qA3S5O3frKeq3VqUpgsL6yfhGL0p~vGJ6uXxrx0Hi6Gh25w5tnZHQSe74iR2gI4vRZLxnt-Rrrw1l1qScTd8ZKUaOQ6MBFnZrTC7IEbifCchc56nuIFMStUPc9sp2bm9BtnSiZew9yYydwcghmLxswxdjHCAiG3R1Wf3s6MaXRgSwc~DiHF5vsxCJem1iLz2vqgfx3LrxITrmTgUYIhLGuM~4DEyMBZ-npMbym1OTbA024M7qAcq~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
//         text: 'Контрактура суставов',
//         top: 170,
//         right: -250
//     },
//     {
//         img: 'https://s3-alpha-sig.figma.com/img/f996/56d2/b4d62b5006bad40f05e4973f176f44ec?Expires=1658707200&Signature=PTm72jY7j-wODvCLHk28n15S2qDSVYkFp-LAM2RE1SophbvXDDLub3tPRqJcMdTkejjb5JadbyPZ83-s1q~QA1QopqH1-nWK7zgRVMDfDR8gI54Saw4FkNnzipWkeJV9gu4KaURT31phRjA7khZejOhCT-PM1DKLn59zGQmIbR7HQoog9OqWnKXKsfUfXc1rj0bhFQaM-44UXvfwNJOoUULSl1dc1aIFGU72UQIzX7t0jtz5jL0sdacSwTIxlXuibrgae5-LLgI~NB6PL2ejJfYWD335rxr067Muqsj9V-v9IBm3ekZ51G8tpT04oooj7ng90wUZeLj0DnSKwYaM5g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
//         text: 'Вывих бедра',
//         top: 0,
//         right: -285
//     },
//     {
//         img: 'https://s3-alpha-sig.figma.com/img/cc97/a86e/5edfb910934dd936ac676b6525e55f75?Expires=1658707200&Signature=KNY4BxsKuMWRbDlXkE3x6ZZLGBwVjEEd1qx4BqIjGlED1vJGY5sUhqNziBj-1-kM8qQdpBWhhaH~xf-v76crYfX7B2X3PKRVOINbqn9fJ4LmxFw0~FBsCgZOh7Dh6poGlqg1GOCxMdP1SYjLG4AuVnEEaveVJKOhdGTJ3UvSe-YoyPShfbXTf3182pJyaBi-IyADYCbP3R1825bmrWhfeEuZRg1w-SDnz~kldXx9TGKfR9~gvA2SIagM~1POAwl6coa0fJb1DEHzoCbqWwCM-jVegQb2iIWoVAkR820e4InaoUxoduCk0awWk7BE0ELVgdcM7cxEsPSRj082iIvvcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
//         text: 'Утомляемость',
//         top: -150,
//         right: -220
//     },

// ]
