#include <bits/stdc++.h>
using namespace std;

void generateSubsets(vector<int>& nums,vector<int>& currentSubset, int index) {
   
    cout << "[";
    for (int num : currentSubset) {
        cout << num << " ";
    }
    cout << "]" << endl;

   
    for (int i = index; i < nums.size(); i++) {
        
        currentSubset.push_back(nums[i]);
        
        generateSubsets(nums, currentSubset, i + 1);
        
        currentSubset.pop_back();
    }
}

int main() {
    vector<int> nums = {1, 2, 3};
    vector<int> currentSubset;
    
    
    generateSubsets(nums, currentSubset, 0);
    
    return 0;
}


// #include<bits/stdc++.h>
// using namespace std;
// vector<string> AllPossibleStrings(string s) {
// 	int n = s.length();
// 	vector<string>ans;
// 	for (int num = 0; num < (1 << n); num++) {
// 		string sub = "";
// 		for (int i = 0; i < n; i++) {
// 			//check if the ith bit is set or not
// 			if (num & (1 << i)) {
// 				sub += s[i];
// 			}
// 		}
// 		if (sub.length() > 0) {
// 			ans.push_back(sub);
// 		}
// 	}
// 	sort(ans.begin(), ans.end());
// 	return ans;
// }
// int main()
// {


// 	string s="abc";
// 	vector<string>ans = AllPossibleStrings(s);
// 	//printint all the subsequence.
// 	cout<<"All possible subsequences are "<<endl;
// 	for (auto it : ans) {
// 		cout << it << " ";
// 	}

// }